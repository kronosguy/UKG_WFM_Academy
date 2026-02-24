# UKG WFM Academy

**UKG is a multiplier**: it amplifies **good architecture** and punishes **sloppy configuration**.
This repo is where that power becomes repeatable outcomes: **UKG Pro WFM, UKG Pro, UKG Ready, WFC, UTM**, and the full Kronos lineage.

This is hands-on training built for **HRIS / HRIT / Systems Admins** and anyone who has to make UKG behave in real life.
You will learn how to design solutions when others see red tape, and how to prove what works even when someone says “you can’t.”

---

## Folder guide (start here, no duplicates)

* **[academy/](academy/)**: Guided learning paths with exercises, checkpoints, and grading criteria.  
  Best for: building skill from fundamentals to operator grade.

* **[fieldmanual/](fieldmanual/)**: Production truth by domain: failure modes, diagnostics, recovery, rollback steps.  
  Best for: running live environments and needing answers fast.

* **[blueprints/](blueprints/)**: Implementation playbooks and repeatable patterns you can standardize across markets and entities.  
  Best for: solution architecture and scalable delivery.

* **[toolkit/](toolkit/)**: Runnable utilities that support manuals and blueprints.  
  Best for: automation, audits, validation, and operational lift.

* **[sdk/](sdk/)**: Reusable API helpers and client libraries (JavaScript and Python).  
  Best for: building integrations and repeatable API workflows.

* **[scenarios/](scenarios/)**: End-to-end simulations that mirror real operations and prove concepts in context.  
  Best for: practice that looks like production.

* **[grader/](grader/)**: Validation harness and scoring rules for exercises and scenarios.  
  Best for: objective proof you did it right.

* **[operator-os/](operator-os/)**: Governance cadence: checklists, runbooks, routines, operating rhythm.  
  Best for: keeping environments clean and scalable over time.

* **[docs/](docs/)**: Writing standards, templates, schemas, and reusable snippets.  
  Best for: consistency, professionalism, and maintainability.

* **[platform/](platform/)**: Delivery surface for a product-like experience (site, docs, app) once wired in.  
  Best for: publishing and distribution.

* **[sandbox/](sandbox/)**: Safe scratch space that will not hurt anything.  
  Best for: experiments and throwaway work.

---

## Academy curriculum (full lesson map)

### Module 00 — Orientation and operator mindset
1. What “operator-grade” means in UKG work (and why most teams never get there)
2. Environment model: tenants, markets, entities, and why “one config” never stays one config
3. The UKG risk triangle: compliance, cost, employee experience
4. Change control basics: what to touch, what to document, what to never “just try”
5. Building your personal runbook: notes that survive audits and turnover

### Module 01 — Platform mental model (how UKG really behaves)
6. The configuration dependency chain (what changes what)
7. Identifying upstream vs downstream failures (root cause vs symptom)
8. Effective troubleshooting workflow: reproduce, isolate, validate, rollback
9. Naming conventions that scale across markets (and why bad names become outages)
10. “Unknown unknowns”: where hidden defaults live and how to surface them

### Module 02 — Identity, roles, and access control (least privilege that still works)
11. Role strategy: job-based vs person-based access patterns
12. Segregation of duties: who can edit what without breaking governance
13. Access layers that matter (UI permissions vs functional outcomes)
14. Admin auditing: proving who changed what and when
15. Designing access that supports support (service desk patterns that don’t escalate everything)

### Module 03 — Time collection control (WFC / devices / UTM realities)
16. Time capture methods and their failure modes (device, web, mobile, badge)
17. Device trust model: what makes a punch “trustworthy”
18. UTM fundamentals: why time clocks drift, how punch data gets weird
19. Preventing fraud without destroying workflow (controls that stick)
20. “It worked yesterday”: diagnosing intermittent punch failures

### Module 04 — Mobile punching and geofence (UKG Pro WFM in real life)
21. Mobile governance: what you can enforce vs what you can only detect
22. Geofence strategy: circles, polygons, known places, and practical tradeoffs
23. VPN and remote work patterns: allowable exceptions without opening the floodgates
24. Location trust: how to reduce false negatives and stop false positives
25. Incident playbook: geofence outage triage and recovery

### Module 05 — Scheduling operations that scale
26. Schedules as data: why your reports lie when your schedule model is messy
27. Zones, early starts, and overlap problems (and how to design around them)
28. Shift templates: how to use them without creating reporting chaos
29. Post-publish churn: measuring edits, reducing churn, enforcing accountability
30. Coverage and workload patterns: building schedules that match staffing reality

### Module 06 — Timecard lifecycle and exceptions
31. Exception taxonomy: which exceptions matter, which are noise
32. Exception aging (SLA): building accountability by manager and department
33. Missed punch root causes: method, device, location, time-of-day analysis
34. Approvals backlog: requests aging patterns and operational fixes
35. Sign-off compliance: preventing “end of pay period surprises”

### Module 07 — Pay rules and labor calculations (the engine room)
36. Pay rule evaluation order: why “obvious” logic fails in production
37. Common pay rule patterns that scale (meals, OT, premiums, rounding, call-back)
38. Edge cases: split shifts, transfers, on-call, travel time, and special units
39. Testing strategy: how to validate pay rules without gambling on payroll
40. Rollback strategy: how to undo bad pay rule changes safely

### Module 08 — Compliance: meals, attestations, and policy enforcement
41. Meal compliance patterns: missed meals, cancelled deductions, short breaks
42. Attestation design: completion rate, cancel rates, and “did they actually see it”
43. Policy enforcement without manual policing (controls + monitoring)
44. Documentation patterns that survive audits
45. Building compliance dashboards people can’t argue with

### Module 09 — Reporting that leadership trusts
46. Metric definition governance: one definition, many views
47. Data quality gates: preventing “garbage in, charts out”
48. Cross-market comparability: normalization patterns
49. Executive-ready scorecards: stable, explainable, defensible
50. Building the “why” layer: linking operational behavior to outcomes

### Module 10 — APIs and integration (UKG Pro / UKG Pro WFM / UKG Ready)
51. API mental model: objects, IDs, effective dating, pagination, rate limits
52. Authentication patterns and secure storage (what not to do)
53. Pull pipelines: extracting operational truth on a schedule
54. Reconciliation: comparing API truth vs UI truth and handling drift
55. Automation design: turning messy operations into repeatable workflows

### Module 11 — Tooling and automation (toolkit + sdk)
56. Building validators: checks that prevent bad changes from shipping
57. Building auditors: who did what, where, and why it matters
58. Building “operators”: scripts that run like products (inputs, outputs, logs, failures)
59. Packaging: making tools reusable for teams (standards, docs, examples)
60. Reliability: retry logic, error handling, and “no silent failures” rules

### Module 12 — Scenarios and proof (scenarios + grader)
61. Scenario: geofence chaos week (triage, isolate, fix, prevent)
62. Scenario: pay rule regression (reproduce, validate, rollback, patch)
63. Scenario: schedule reporting mismatch (zone overlap, early starts, repair model)
64. Scenario: audit request from leadership (build evidence fast, no panic)
65. Capstone: standardize a multi-market rollout with governance, tooling, and proof

---

## Quickstart (15 minutes)

1. Read standards: **[docs/README.md](docs/README.md)**
2. Pick your lane:
   * Learning path: **[academy/README.md](academy/README.md)**
   * Operator reference: **[fieldmanual/README.md](fieldmanual/README.md)**
3. Start with a high-impact domain (fieldmanual):
   * **[Geofence](fieldmanual/01-geofence/)**  
   * **[Pay rules](fieldmanual/05-payrules/)**  
   * **[Audit](fieldmanual/22-audit/)**  
   * **[Devices](fieldmanual/23-devices/)**  
   * **[Mobile](fieldmanual/24-mobile/)**  

---

## How I run this repo (Wiki, Projects, Actions)

I use three GitHub features to keep this repo organized, shippable, and easy to follow:

- **Wiki**: I maintain the roadmap, curriculum navigation, decision log, and release notes here so the “why” stays easy to find.
- **Projects**: I track lessons, tools, and scenarios like a production backlog (draft → review → published) with priorities, owners, and release milestones.
- **GitHub Actions**: I automate quality gates (markdown + link checks), grader validation for scenarios, and packaging/release steps for toolkit and SDK artifacts.

---

## Repo rules

- I never include real production data. I only use synthetic or redacted examples.
- I don’t commit build artifacts (node_modules, .next, dist, build, .turbo, etc.).
- If I change behavior, I document what changed and why.
- Any suspected PII exposure or data-loss risk becomes a GitHub Issue immediately.
- Every operational doc includes rollback steps.

---

## Start here

➡️ **[docs/README.md](docs/README.md)**
