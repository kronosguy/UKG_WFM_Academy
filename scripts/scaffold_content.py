import argparse
import re
from pathlib import Path

VALID_AREAS = {
    "academy",
    "blueprints",
    "docs",
    "fieldmanual",
    "grader",
    "operator-os",
    "platform",
    "sandbox",
    "scenarios",
    "sdk",
    "toolkit",
}

def slugify(s: str) -> str:
    s = s.strip().lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = re.sub(r'-{2,}', '-', s).strip('-')
    return s

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--area", required=True, choices=sorted(VALID_AREAS))
    ap.add_argument("--module", default="")  # optional
    ap.add_argument("--title", required=True)
    ap.add_argument("--slug", default="")
    ap.add_argument("--artifact", default="")  # Lesson/Tool/Scenario/etc (free text)
    args = ap.parse_args()

    root = Path.cwd().resolve()

    module = args.module.strip()
    title = args.title.strip()
    artifact = args.artifact.strip()

    slug = args.slug.strip() or slugify(title)
    if not slug:
        raise SystemExit("Slug resolved to empty. Provide --slug.")

    parts = [args.area]
    if module:
        parts.append(module)
    parts.append(slug)

    target_dir = root.joinpath(*parts)
    target_dir.mkdir(parents=True, exist_ok=True)

    readme = target_dir / "README.md"
    if not readme.exists():
        readme.write_text(
            f\"\"\"# {title}

## Summary
- Area: {args.area}
- Module: {module or 'n/a'}
- Artifact: {artifact or 'n/a'}

## Objectives
- 

## Prereqs
- 

## Steps
1. 

## Validation
- 

## Rollback
- 

\"\"\",
            encoding="utf-8",
        )

    meta = target_dir / "meta.yml"
    if not meta.exists():
        meta.write_text(
            f\"\"\"id: {args.area}:{module + ':' if module else ''}{slug}
title: {title}
area: {args.area}
module: {module or ''}
artifact: {artifact}
status: draft
\"\"\",
            encoding="utf-8",
        )

    print(f"Scaffolded: {target_dir.relative_to(root).as_posix()}/")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
