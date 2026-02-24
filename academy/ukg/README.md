# UKG CORE PATH: ARCHITECTURAL STRATEGY
## DOMAIN: DETERMINISTIC SYSTEM DESIGN

### MODULE 01: THE PAY RULE ENGINE (DEEP DIVE)
Understanding the cascading evaluation of Pay Rules.
- **Evaluation Order**: How Work Rules, Pay Rules, and Holiday Credits interact.
- **The Reconciliation Payload**: Analyzing the XML/JSON response from the `Engine.Calculate` service.
- **Optimization Strategy**: Reducing Pay Rule complexity to improve system performance across 100k+ employee tenants.

### MODULE 02: LOCATION TRUST & GEOFENCING
Architecting the trust boundary between physical location and digital attestation.
- **Polygon Logic**: How UKG Pro WFM calculates inclusivity in coordinate-based regions.
- **Trust Metrics**: Differentiating between "Verified", "Approximated", and "Untrusted" punch locations.
- **The Audit Recovery Protocol**: Reconstructing punch history during geofence outages.

### MODULE 03: ADVANCED COMPLIANCE MODELING
Mapping global labor laws to system configuration.
- **FLSA Exemption Mapping**: Managing the Exempt/Non-Exempt metadata across multiple legal entities.
- **Overtime Banking Logic**: Strategic configuration of OT hours into Time-Off buckets.

---
**Curriculum Version**: 1.1.0-SOVEREIGN
**Status**: HARDENED_INTELLIGENCE
