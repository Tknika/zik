# Zik — Zibersegurtasuna Ikastetxeetan

> Polished prompt for the Zik project website.

---

## Original Intent

Build a website (Zik) that helps Basque Country vocational training colleges adopt cybersecurity governance, good practices, and legal compliance. The site should simplify NIST CSF 2.0, ISO/IEC 27001:2022, NIS2, RGPD, LOPDGDD, and ENS for school boards and digital transformation teams (Eraldi taldeak) starting from zero, prioritizing essential first steps rather than aiming for full certification coverage. The existing guide at [tknika.github.io/zibersegurtasuna-ikastetxeetan](https://tknika.github.io/zibersegurtasuna-ikastetxeetan/) (also built under Tknika) serves as a primary reference and content source.

---

## Refined Prompt

Design and build a static documentation website — named **Zik** — that serves as an accessible, practical cybersecurity governance and legal compliance guide for Lanbide Heziketa (vocational training) colleges in the Basque Country.

The site must distill, translate, and adapt the concepts from **NIST Cybersecurity Framework 2.0**, **ISO/IEC 27001:2022**, **NIS2 Directive**, **RGPD**, **LOPDGDD**, and **ENS** into a simplified, action-oriented format. The target audience consists of **school boards and Eraldi (digital transformation) teams** who have **little to no prior exposure to cybersecurity governance**. The goal is **not** to produce a compliance checklist or a certifiable implementation; instead, it is to bootstrap a minimum viable cybersecurity posture by helping schools understand what to do first, why it matters, what the law requires, and how to do it.

The content and structure must be directly informed by the existing Basque-language guide published at `tknika.github.io/zibersegurtasuna-ikastetxeetan`. Where that guide provides thorough coverage across nine recommendation domains plus practices and resources, Zik should reorganize, simplify, and if possible complement that material — for example, by adding clearer prioritization (what to tackle first, second, third), concrete step-by-step checklists, legal compliance summaries with actionable obligations, ready-to-adapt templates generated on-the-fly (Markdown → DOCX/PDF), and plain-language explanations that assume zero prior knowledge.

The website must be **Basque-first** (primary language, as root locale `/`) with Spanish as a secondary option (`/es/`) for broader reach. It should be published as a static site using **Astro + Starlight** on GitHub Pages, making it easy to host, maintain, and contribute to. Any Python scripting (template generation, content validation) must use **`uv`** (Astral) for dependency management.

---

## Reference Source Documents

The official source standards and regulations have been downloaded and converted to Markdown for easy reference during content development. They are stored in the `sources/` directory:

| File | Format | Language | Description | Source |
|------|--------|----------|-------------|--------|
| `NIST.CSWP.29.pdf` / `NIST_CSF_2.0_EN.md` | PDF + MD | EN | NIST CSF 2.0 — official | nvlpubs.nist.gov |
| `NIST.CSWP.29.spa.pdf` / `NIST_CSF_2.0_ES.md` | PDF + MD | ES | NIST CSF 2.0 — Spanish | nvlpubs.nist.gov |
| `ISO_IEC_27001_2022.pdf` / `ISO27001_2022.md` | PDF + MD | EN/FR | ISO/IEC 27001:2022 **(gitignored)** | Third-party mirror |
| `NIS2_Directive_2022_2555_EN.pdf` / `.md` | PDF + MD | EN | NIS2 Directive (EU 2022/2555) | Mirror of OJ |
| `RGPD_Regulation_2016_679_ES.pdf` / `.md` | PDF + MD | ES | EU GDPR / RGPD — Spanish | BOE |
| `LOPDGDD_LO_3_2018_ES.pdf` / `.md` | PDF + MD | ES | Spanish Organic Law on Data Protection | BOE |
| `ENS_RD_311_2022_ES.pdf` / `.md` | PDF + MD | ES | Esquema Nacional de Seguridad (RD 311/2022) | BOE |

**Conversion method:** PDFs were converted to Markdown using Microsoft's `markitdown` tool, which preserves structure, headings, tables, and readability.

**ISO 27001 licensing note:** ISO/IEC 27001:2022 is a paid standard (155 CHF via iso.org). Files are in `.gitignore`. The Markdown version serves as an internal authoring reference only. The public site links to `iso.org/standard/27001`.

---

## Scope

- **In scope:**
  - A static, easily navigable documentation website (Astro + Starlight).
  - Simplified, non-technical explanations of cybersecurity governance concepts drawn from NIST CSF 2.0 and ISO/IEC 27001:2022.
  - **Legal compliance overview** summarizing NIS2, RGPD, LOPDGDD, and ENS obligations for schools, with actionable steps and disclaimers linking to official sources.
  - A clear, ordered roadmap of essential "first steps" for schools starting from zero.
  - Actionable guidance per domain: governance & roles, asset management, risk analysis, awareness & training, access control, infrastructure resilience, monitoring/detection, incident response, and recovery.
  - Practical templates, checklists, and self-assessment tools **generated on-the-fly** from Markdown into DOCX and PDF via a `uv`-managed Python script.
  - Bilingual content: **Basque primary** (root locale `/`), Spanish secondary (`/es/`).
  - Links to the original Tknika guide and authoritative references (INCIBE, CCN-STIC, NCSC CAF, BOE, EUR-Lex).

- **Out of scope (or deferred):**
  - Full ISO 27001 certification guidance or audit-readiness.
  - Technical deep-dives on specific security tools (firewall configuration, SIEM tuning, penetration testing).
  - Custom development of security software or tools.
  - Hosting or managing a dynamic backend or user accounts.
  - Legal advice — the site provides awareness and references, not legal opinions.
  - Full legal text reproduction — summarized content with links to official sources.

---

## Functional Requirements

1. **Homepage / landing page** with a clear mission statement, target audience description (school boards + Eraldi teams), and an overview of the recommended journey.
2. **"Where to start" section** that answers the question *"We have nothing in place — what do we do first?"* This should present a phased roadmap (e.g., Phase 1: basics, Phase 2: build on top, Phase 3: mature) with clear criteria for moving between phases.
3. **Legal compliance page** summarizing NIS2, RGPD, LOPDGDD, and ENS obligations in plain language, with:
   - Which regulation applies to whom and when.
   - Concrete, prioritized actions for compliance.
   - Links to official sources (BOE, EUR-Lex).
   - Clear disclaimer: "This is a simplified summary, not legal advice."
4. **Domain-based guidance pages** — one per cybersecurity domain, each containing:
   - A plain-language summary of the domain.
   - A prioritized shortlist of concrete actions (ordered by impact vs. effort).
   - Links to related templates and further reading.
   - Explicit mapping to relevant NIST CSF 2.0 functions/categories and relevant ISO/IEC 27001:2022 controls (simplified, for reference only).
   - Legal compliance notes where a domain intersects with regulatory requirements (e.g., data protection under asset management, breach notification under incident management).
5. **Templates & resources library:**
   - Generated on-the-fly as DOCX and PDF via a `uv`-managed Python script (`scripts/generate_templates.py`).
   - Templates authored in Markdown, version-controlled in the repo.
   - At minimum: RACI matrix template, risk assessment spreadsheet, threat catalog (Margerit-based), and an incident response plan skeleton.
6. **Glossary** of cybersecurity and legal terms explained in plain Basque and Spanish.
7. **Bilingual support:** Basque as root locale (`/`), Spanish under `/es/`. Starlight fallback shows Basque content when Spanish translation is pending. Custom Basque UI translation strings (i18n JSON).
8. **Search** capability via Pagefind (Starlight built-in), with Basque UI strings configured.
9. **Navigation** sidebar with clear categories matching the phased roadmap.
10. **Footer** with references, attribution to Tknika, links to the original guide, source repositories, and official legal sources.

---

## Non-Functional Requirements

- **Static site generator:** Astro + Starlight (documentation theme). Content in Markdown/MDX. Build-time template generation via Python.
- **Python toolchain:** `uv` (Astral) for all Python dependencies. `pyproject.toml` with pinned versions and `uv.lock`.
- **Performance:** Pages should load in under 2 seconds on a standard mobile connection. Starlight ships zero JS by default.
- **Accessibility:** Meet WCAG 2.1 Level AA minimum.
- **Maintainability:** All content in Markdown. Editable by non-developers via GitHub web UI. Template Markdown sources are plain text, version-controlled.
- **SEO:** Proper meta tags, Open Graph tags, and a sitemap for discoverability.
- **Responsive design:** Mobile-first, usable on phones, tablets, and desktops.
- **Open-source:** Repository publicly available under a permissive license (CC BY-SA 4.0 for content, MIT for code).
- **Hosting:** GitHub Pages, deployed via GitHub Actions on push to `main`.

---

## Constraints & Assumptions

### Constraints
- The project name is fixed: **Zik**.
- Primary language is **Basque (euskara)**, served as root locale `/`; Spanish is secondary under `/es/`.
- Hosting target: GitHub Pages (no server-side logic).
- Content must be informed by and compatible with the existing `zibersegurtasuna-ikastetxeetan` guide (it should not contradict it).
- The project is under the Tknika umbrella.
- All Python scripting uses `uv` (Astral) for dependency management.
- Source reference documents are available locally in `sources/` as PDF + Markdown.
- Template generation runs at build time (CI); generated files committed to `public/templates/` so the site works even if the script fails.

### Assumptions made
1. **Static site generator:** Astro + Starlight. More modern and lighter than Docusaurus; has built-in i18n with fallback, Pagefind search, and a clean documentation theme.
2. **Bilingual content:** Basque-first (root locale). Spanish translations follow incrementally. Starlight's fallback feature shows Basque content with a notice when Spanish is pending.
3. **Basque UI translations:** Starlight does not ship Basque UI strings — a one-time custom JSON file (`src/content/i18n/eu.json`) with ~30 translated keys is required.
4. **Audience tech level:** Target users (school boards, Eraldi teams) have basic digital literacy but no cybersecurity-specific knowledge — explaining even basic concepts from scratch is appropriate.
5. **Template formats:** Templates are authored in Markdown and converted to DOCX + PDF at build time via a Python script using `pandoc` and `weasyprint`. This keeps templates version-controlled as text and generates office formats automatically.
6. **Phased roadmap structure:** Three-phase model (basic → intermediate → advanced) mapped to: Phase 1 = governance + asset inventory + backups + basic access control; Phase 2 = risk analysis + awareness campaigns + monitoring + legal compliance basics; Phase 3 = incident response drills + continuous improvement + full legal alignment.
7. **Legal content:** Summaries are informational, not legal advice. Every legal page includes a disclaimer and links to BOE/EUR-Lex official texts. Review by someone with governance/legal background before publication is assumed.
8. **Content ownership:** The team owns the authority to simplify/reinterpret existing Tknika content; no external editorial board approval is required beyond the project team.
9. **No login/auth:** The site is fully public, with no authenticated areas required.
10. **Reference priority:** NIST CSF 2.0 is the primary structural framework; ISO/IEC 27001:2022 references are supplementary. Legal regulations (NIS2, RGPD, LOPDGDD, ENS) are cross-referenced where relevant to each domain.

---

## Success Criteria

1. A school board member or Eraldi team lead with no prior cybersecurity experience can read the "Where to start" page and identify the first three concrete actions to take within their school.
2. The legal compliance page correctly identifies key NIS2, RGPD, LOPDGDD, and ENS obligations applicable to Basque vocational schools.
3. At least 6 of the 9 recommendation domains (from the original guide) are covered with simplified, actionable guidance.
4. At least 4 downloadable/editable templates are available in both DOCX and PDF formats, generated from Markdown sources.
5. Template generation (`uv run scripts/generate_templates.py`) completes without errors in CI.
6. The site is live on GitHub Pages and the source repository is publicly accessible.
7. Content is available in both Basque (root) and Spanish (`/es/`) for all core guidance pages.
8. The site receives positive qualitative feedback from at least 3 pilot schools (targeting school boards and Eraldi teams) within 3 months of launch.
9. The site does not contradict or undermine the original guide; it positions itself clearly as a complementary, entry-level resource.

---

## Open Questions

1. **Who will produce the Spanish translations, and by when?** Will translation be done upfront or iteratively?
2. **Should the site include an interactive self-assessment quiz/tool** (e.g., "How mature is your school's cybersecurity?") or keep everything as static content?
3. **Is there a need for a third language (English)** to reach non-Basque/non-Spanish audiences or international project visibility?
4. **What is the expected launch timeline?** (MVP scope vs. full scope — PROJECT.md estimates ~15 weeks.)
5. **Should the site link out to or embed content from the existing guide,** or should it duplicate and adapt all content independently to avoid dependency?
6. **Who are the designated content owners/maintainers** after initial development is complete?
7. **Should there be a mechanism for schools to contribute their own templates or case studies** (Pull Requests / issues on the repo)?
8. **Will there be any branding/design guidelines from Tknika** that the site must follow (logos, colors, typography)?
9. **ISO 27001 licensing — resolved:** files are gitignored. Confirm this is acceptable for the team's workflow.
10. **Legal content review:** Who will review the NIS2/RGPD/LOPDGDD/ENS summaries for accuracy before publication?
11. **NIS2 PDF source:** The PDF is from a third-party mirror (EUR-Lex blocks direct download). Is this acceptable, or should we rely solely on the EUR-Lex HTML version?
