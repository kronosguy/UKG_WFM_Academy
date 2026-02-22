# ukg-wfm-academy

This repo is a **hands-on, operator-grade training universe for UKG Pro WFM + HRIS-adjacent work**.  
Not theory. Not vibes. **Real patterns, real failure modes, real validation.**

If you’ve ever said “UKG is powerful but messy” — this is the place where we turn that into **repeatable skill**.

---

## What you’re getting
- **Interactive learning paths** (do the work, prove the outcome)
- **Field manual truth** (how it breaks, how to diagnose, how to recover)
- **Blueprint patterns** (repeatable implementations you can reuse)
- **Tooling + SDKs** (automation-ready utilities and helpers)
- **Scenarios + grading** (end-to-end simulations with validation)

---

## Choose your route (start here)
Pick the lane that matches your intent today:

- **I’m learning from zero → competent** → [cademy/](./academy)
- **I’m operating production and need answers fast** → [ieldmanual/](./fieldmanual)
- **I’m implementing or standardizing across markets** → [lueprints/](./blueprints)
- **I’m automating and building utilities** → [	oolkit/](./toolkit)
- **I’m building reusable API helpers** → [sdk/](./sdk)
- **I want end-to-end simulations + proofs** → [scenarios/](./scenarios)
- **I want standards/templates/snippets** → [docs/](./docs)
- **I want operating cadence (runbooks, governance, routines)** → [operator-os/](./operator-os)
- **I want validation/scoring rules** → [grader/](./grader)
- **I want a scratchpad that won’t hurt anything** → [sandbox/](./sandbox)

---

## The map (what lives where)
`	ext
docs/         writing standards, templates, schemas, reusable snippets
academy/      learning paths, levels, exercises, grading criteria
platform/     delivery surface (site/docs/app) when you wire it in

fieldmanual/  operator-grade reference by topic (geofence, pay rules, audits, etc.)
blueprints/   implementation playbooks + repeatable patterns
toolkit/      runnable utilities that support manuals/blueprints
sdk/          reusable client libraries/helpers (js + python)

scenarios/    simulations + walkthroughs validating concepts end-to-end
grader/       scoring rules + validation harness for exercises
operator-os/  checklists, runbooks, routines, governance cadence
sandbox/      scratch space (safe to delete)
The loop (how you actually level up)

You don’t “read” your way into mastery. You run the loop:

What is this?

academy/ = guided progression (skills)

fieldmanual/ = production truth (operations)

blueprints/ = repeatable patterns (delivery)

toolkit/ + sdk/ = automation (execution)

scenarios/ + grader/ = proof (validation)

Quickstart (15 minutes, no wandering)

Do this in order:

 Read the content standards → docs/README.md

 Pick your lane:

 Learning path → academy/README.md

 Operator reference → fieldmanual/README.md

 Start with a high-impact domain (pick one):

 Geofence → fieldmanual/01-geofence/

 Pay rules → fieldmanual/05-payrules/

 Audit → fieldmanual/22-audit/

 Devices/Mobile control → fieldmanual/23-devices/
 / fieldmanual/24-mobile/

Interactive standards (click to expand)
<details> <summary><strong>What every topic folder must contain</strong></summary>

Minimum

README.md with: scope, key decisions, and why it matters

Do / Don’t

Diagnostics: what to check first (fast triage)

Failure modes: how it breaks + how it presents

Recovery: safe rollback steps (no gambling)

Links to supporting toolkit scripts (if applicable)

Optional

diagrams

sample configs / redacted examples

validation checklist

decision tree

</details> <details> <summary><strong>Where runnable things go (so this stays clean)</strong></summary>

If it runs (script/automation/utility): toolkit/

If it’s a library/client (reusable code): sdk/

If it’s a repeatable delivery pattern: blueprints/

If it’s operator truth: fieldmanual/

If it’s guided learning: academy/

</details> <details> <summary><strong>What this repo is NOT</strong></summary>

Not a dumping ground for random notes

Not a place for real production data (ever)

Not a graveyard of half-finished experiments (sandbox exists for that)

</details>
Repo rules (keep it professional, keep it scalable)

No real production data. Use synthetic or redacted examples only.

Keep build artifacts out of git (node_modules, .next, dist, build, .turbo, etc.).

If you change behavior, document the decision + the reason.

Every operational doc needs rollback steps.

What’s coming next (the prequel)

This repo is the foundation for:

richer learning paths (levels, checkpoints, validations)

tooling that turns field knowledge into automation

scenario simulations that mirror real-world operations

a platform experience that makes this feel like a product

Start here (one link)

➡️ docs/README.md
