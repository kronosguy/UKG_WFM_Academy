# ukg-wfm-academy

Single repo for the UKG Pro WFM Academy: curriculum, field manuals, blueprints, tooling, SDKs, and scenario content.

## What lives where
- **docs/**: shared writing standards, templates, schemas, snippets
- **academy/**: structured learning paths, levels, exercises, grading criteria
- **platform/**: the web/docs experience (when you wire it in)
- **fieldmanual/**: deep-dive operator reference by topic (geofence, pay rules, audits, etc.)
- **blueprints/**: implementation playbooks and repeatable patterns
- **toolkit/**: runnable utilities and automations that support the manuals/blueprints
- **sdk/**: reusable client libraries and helpers
- **scenarios/**: test cases, simulations, walkthroughs
- **grader/**: scoring rules and validation harness
- **operator-os/**: runbooks, checklists, operating model
- **sandbox/**: scratch work that can be deleted without regret

## Conventions
- Each topic folder gets: README.md + optional templates/samples.
- Anything runnable goes under toolkit/ (or sdk/ if it’s a library).
- Keep artifacts out of git (node_modules, .next, dist, build).

## Quick start
- Start with **docs/README.md**
- Then pick a lane: **fieldmanual/** (reference) or **academy/** (learning path)
