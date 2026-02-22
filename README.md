# UKG WFM Academy

UKG is powerful. It is also unforgiving.  
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

## Academy roadmap (the lessons that make this worth reading)

1. **UKG navigation and mental models**  
   Build a system map: where configuration actually lives, what changes what, and what breaks downstream.

2. **Access control and device governance (WFC, UTM, mobile)**  
   Lock down punches and high-risk access with enforceable control layers, not policy slides.

3. **Geofence and location trust (UKG Pro WFM)**  
   Design location strategies that survive VPNs, remote work exceptions, and messy real-world punch behavior.

4. **Scheduling operations that scale**  
   Patterns for zones, workload planning, early starts, edits after publish, and making reports stop lying.

5. **Pay rules and labor calculations**  
   Understand how the engine evaluates time and exceptions, then standardize patterns that stay correct.

6. **Audits, compliance, and recoverability**  
   Build audit trails, validation gates, and rollback playbooks so production changes are defensible.

7. **APIs and automation (UKG Pro, UKG Pro WFM, UKG Ready)**  
   Build utilities that pull, validate, and reconcile data, then turn repeatable workflows into tooling.

8. **Reporting patterns that executives actually trust**  
   Normalize definitions, enforce data quality rules, and ship metrics that survive cross-market comparisons.

9. **Simulation drills (scenarios + grader)**  
   Run end-to-end cases: “what happened,” “why,” “how to fix,” and “how to prevent it,” with scoring.

---

## Quickstart (15 minutes)

1. Read standards: **[docs/README.md](docs/README.md)**  
2. Pick your lane: **[academy/README.md](academy/README.md)** or **[fieldmanual/README.md](fieldmanual/README.md)**  
3. Start with a high-impact domain inside **fieldmanual/** (geofence, pay rules, audits, devices, mobile)

---

## Repo rules

No real production data. Use synthetic or redacted examples only.  
Keep build artifacts out of git: node_modules, .next, dist, build, .turbo, etc.  
If you change behavior, document the decision and the reason.  
Every operational doc includes rollback steps.

---

## Start here

➡️ **[docs/README.md](docs/README.md)**
