from __future__ import annotations

import sys
from pathlib import Path

try:
    import yaml  # type: ignore
except Exception:
    yaml = None

REQUIRED_KEYS = {"id", "title", "area", "artifact", "status"}

def load_yaml(p: Path) -> dict:
    if yaml is None:
        raise RuntimeError("PyYAML not installed. Add it to CI via pip install pyyaml.")
    return yaml.safe_load(p.read_text(encoding="utf-8")) or {}

def main() -> int:
    root = Path.cwd().resolve()
    scenarios = root / "scenarios"

    if not scenarios.exists():
        print("No scenarios folder found; skipping.")
        return 0

    meta_files = list(scenarios.rglob("meta.yml")) + list(scenarios.rglob("meta.yaml"))
    if not meta_files:
        print("No scenario meta files found; passing (nothing to validate yet).")
        return 0

    errors: list[str] = []
    for mf in meta_files:
        try:
            data = load_yaml(mf)
        except Exception as e:
            errors.append(f"{mf.as_posix()}: failed to parse yaml ({e})")
            continue

        missing = REQUIRED_KEYS - set(data.keys())
        if missing:
            errors.append(f"{mf.as_posix()}: missing keys -> {', '.join(sorted(missing))}")

        # minimal sanity
        if data.get("area") != "scenarios":
            errors.append(f"{mf.as_posix()}: area must be 'scenarios'")

    if errors:
        print("Validation failed:")
        for e in errors:
            print(f"  - {e}")
        return 1

    print(f"Validated {len(meta_files)} scenario meta file(s).")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
