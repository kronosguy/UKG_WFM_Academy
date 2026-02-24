# 📑 ENGINEERING SPECIFICATIONS
## UKG WFM ACADEMY PLATFORM ARCHITECTURE

### I. FRONTEND STACK
- **Framework**: Next.js 14 (App Router enabled for future scale).
- **Typing**: TypeScript 5.x with Strict Null Checks.
- **Styling**: Tailwind CSS with custom utility-first primitives for Terminal UX.
- **Content Engine**: MDX (Markdown for Component Era) with high-fidelity metadata.

### II. DATA ARCHITECTURE
- **Curriculum Model**: Tree-based hierarchy (Foundation -> Intermediate -> Advanced).
- **Asset Indexing**: Automated `nav-builder.ts` for dynamic route discovery.
- **SEO Layer**: Automated `sitemap.xml` and `robots.txt` generation via build-time scripts.

### III. DEPLOYMENT PIPELINE (FULL-AUTO)
- **Host**: GitHub Pages / kronosguy.com (Subpath: `/academy`).
- **Automation**: GitHub Actions (Ubuntu-Latest runner).
- **Governance**: Automated Security Scanning (Trivy), Linting (ESLint), and Type Checking.

---

**TECHNICAL STATUS:** ✅ **SPECIFICATIONS VALIDATED**
