import os
import re
import sys
from pathlib import Path

LINK_RE = re.compile(r'(?<!\!)\[[^\]]*\]\(([^)]+)\)')  # excludes images ![alt](...)
ANGLE_RE = re.compile(r'<([^ >]+)>')  # autolinks

IGNORE_PREFIXES = (
    "http://",
    "https://",
    "mailto:",
    "tel:",
    "#",
)

def is_ignored(link: str) -> bool:
    link = link.strip()
    if not link:
        return True
    return link.startswith(IGNORE_PREFIXES)

def normalize_target(link: str) -> str:
    # strip title portion: (path "title")
    link = link.strip()
    if " " in link and not link.startswith("http"):
        # naive split for markdown titles
        link = link.split(" ", 1)[0]
    # strip anchor
    if "#" in link:
        link = link.split("#", 1)[0]
    return link.strip()

def collect_md_files(root: Path) -> list[Path]:
    md_files: list[Path] = []
    for p in root.rglob("*.md"):
        parts = set(p.parts)
        if ".git" in parts or "node_modules" in parts:
            continue
        # wiki is separate repo, ignore anything under .github (optional)
        md_files.append(p)
    return md_files

def extract_links(text: str) -> list[str]:
    links = LINK_RE.findall(text)
    links += ANGLE_RE.findall(text)
    return links

def main() -> int:
    root = Path(os.getcwd()).resolve()
    md_files = collect_md_files(root)

    errors: list[str] = []

    for md in md_files:
        try:
            txt = md.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            txt = md.read_text(encoding="utf-8", errors="ignore")

        for raw in extract_links(txt):
            raw = raw.strip()
            if is_ignored(raw):
                continue

            target = normalize_target(raw)
            if not target:
                continue

            # Skip query-only links
            if target.startswith("?"):
                continue

            # Resolve relative to the markdown file
            base = md.parent
            candidate = (base / target).resolve()

            # If link is repo-root relative like /docs/README.md, treat as root-relative
            if target.startswith("/"):
                candidate = (root / target.lstrip("/")).resolve()

            # Allow directory links (must exist)
            if candidate.exists():
                continue

            # Common case: links to folders without trailing slash, or to README implicitly
            # Try directory/README.md
            candidate_readme = candidate / "README.md"
            if candidate_readme.exists():
                continue

            errors.append(f"{md.as_posix()}: broken link -> {raw}")

    if errors:
        print("Broken internal links found:")
        for e in errors:
            print(f"  - {e}")
        return 1

    print("Internal link check passed.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
