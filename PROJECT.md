# Zik — Project Definition

## Project Title

**Zik — Zibersegurtasuna Ikastetxeetan**
(Cybersecurity in Education Centers — Basque Country)

---

## Executive Summary

Zik is a **step-by-step, action-oriented guide** that walks Basque Country vocational training colleges (_Lanbide Heziketa_) through cybersecurity governance from zero to basic maturity. It is not a reference encyclopedia — it is a **linear, scannable path**: each step explains what to do, why, and helps the school fill in templates and data as they progress. A visible **Zik maturity score** tracks progress, and **downloadable templates populate with the data the school has entered** so they leave with real, customized documents.

Zik simplifies NIST CSF 2.0, ISO/IEC 27001:2022, NIS2, RGPD, LOPDGDD, and ENS into a **guided checklist** aimed at school boards and digital transformation teams (_Eraldi taldeak_) with zero prior cybersecurity experience. It does not pursue certification — it bootstraps a minimum viable security posture.

Zik is a **practical tool**, not a reference complement to the existing Tknika guide.

---

## Core Concept

### What Zik is

- A **linear step-by-step guide**: Start at step 1, finish at step ~15. Progress is tracked.
- A **maturity tracker**: A visible score in the UI that goes up as the school completes actions.
- A **template generator with data persistence**: Schools fill in fields (names, roles, asset names, etc.) and the site remembers them. At the end, it generates populated DOCX/PDF templates with their actual data.
- A **self-assessment tool**: Each step asks checkboxes/inputs; the aggregate forms a picture of the school's posture.
- **Bilingual**: Basque primary (`/`), Spanish secondary (`/es/`).
- **Client-side only**: All data stays in the browser (localStorage). No backend, no auth, no tracking.

### What Zik is NOT

- A reference guide or encyclopedia.
- A complement to the original Tknika guide (it replaces/supersedes it for the target audience).
- An ISO 27001 certification prep tool.
- Technical tool configuration docs.
- Legal advice.

---

## User Journey

1. School board member or Eraldi lead visits Zik.
2. They see: **"Hasiberria — 15 urrats zibersegurtasunaren oinarriak ezartzeko"** (Getting started — 15 steps to establish cybersecurity foundations).
3. The left sidebar shows the 15 steps. A Zik maturity score (e.g., 0/15 → 3/15 → 12/15) is visible in a corner.
4. Step 1 asks: "Who will be the cybersecurity coordinator? Name: ___ Email: ___ Phone: ___" — they fill it in.
5. The data is stored in localStorage. Later steps reuse this data (e.g., the coordinator's name appears in the RACI template, the incident response plan, etc.).
6. At any point, they can download the accumulated data as partially-filled templates.
7. At the end (step 15), they download the full set of populated templates as a ZIP.
8. They leave with: a completed RACI matrix, a basic security policy, a risk assessment starter, a threat catalog, and an incident response skeleton — all containing their actual data.

---

## Maturity Score

The Zik score is a simple fraction: **completed steps / total steps**. Ranges from 0/N to N/N.

Each step has completion criteria (checkboxes). When all checkboxes for a step are checked, the step is "done" and contributes to the score.

The score is displayed:
- In the top-right corner as a badge (e.g., "Zik: 8/15")
- In the left sidebar, steps show ✓ when completed
- As a progress bar at the top of the guide

Steps can be un-completed (unchecking) — the score goes back down. This encourages honesty.

---

## Target Users / Stakeholders

| Role | Need |
|------|------|
| **School boards / governing bodies** | Understand legal obligations, assign responsibilities, and show evidence of governance. |
| **Eraldi teams (digital transformation)** | A concrete path to follow, with templates that generate real documents containing their data. |
| **IT coordinators / technicians** | Practical configuration checklists (backups, access control, monitoring) they can action immediately. |
| **Tknika / Digitaldeak team** | Project sponsors; expect the guide to be the definitive entry-point for schools adopting cybersecurity. |

---

## Scope

### In scope

- Static bilingual website (**Basque primary**, Spanish secondary) hosted on GitHub Pages.
- 15-step linear guide covering governance foundations (simplified from 9-domain structure).
- **Zik maturity score** tracking progress visually.
- **Client-side data persistence** (localStorage) — school fills in fields once, reused across steps.
- **Template generation** with user data mixed in: RACI matrix, security policy, risk assessment, threat catalog, incident response plan.
- **Progress-aware sidebar** — current step highlighted, completed steps marked.
- **Export**: download all completed templates as a ZIP at the end.
- **Search** for reference terms (Pagefind).
- WCAG 2.1 AA accessibility.

### Out of scope

- Full ISO 27001 certification guidance or audit preparation.
- Technical tool configuration deep-dives (firewalls, SIEM, pen testing).
- Dynamic backend, user accounts, authentication, server-side storage.
- Real legal advice — site provides awareness and structured guidance, not legal opinions.
- Custom security software development.
- Data sharing or cloud sync between schools.

---

## Site Structure

```
/
├── index.md                  # Landing page — explains what Zik is, shows the 15-step overview
├── urratsak/                 # The 15-step guide (Basque)
│   ├── index.md              # Overview + maturity score widget
│   ├── 01-arduraduna.md      # Step 1: Name the coordinator
│   ├── 02-politika.md        # Step 2: Write the security policy
│   ├── 03-batzordea.md       # Step 3: Create the security committee
│   ├── 04-raci.md            # Step 4: Define roles (RACI matrix)
│   ├── 05-aktiboak.md        # Step 5: Inventory assets
│   ├── 06-klasifikazioa.md   # Step 6: Classify information
│   ├── 07-arriskuak.md       # Step 7: Risk analysis
│   ├── 08-sentsibilizazioa.md# Step 8: Awareness & training
│   ├── 09-atzipena.md        # Step 9: Access control & MFA
│   ├── 10-babeskopiak.md     # Step 10: Backups (3-2-1)
│   ├── 11-eguneratzeak.md    # Step 11: System updates
│   ├── 12-zifraketa.md       # Step 12: Encryption
│   ├── 13-monitorizazioa.md  # Step 13: Threat monitoring
│   ├── 14-intzidentziak.md   # Step 14: Incident response plan
│   └── 15-berreskuratzea.md  # Step 15: Recovery + export
├── legal/
│   └── araudia.md            # Legal reference (NIS2, RGPD, ENS) — NOT a step, just reference
├── glossary/
│   └── index.md              # Glossary of terms
└── templates/
    └── index.md              # Templates download page (also accessible from steps)

/es/                           # Spanish mirror of all above
```

### Why 15 steps instead of 9 domains?

The original Tknika guide's 9 domains are **categories of knowledge**, not a sequence. Zik needs a **sequence**. The 15 steps reorganize the domains into actionable, ordered actions. For example:

- Domain 1 (Governance) → Steps 1–4 (coordinator → policy → committee → RACI)
- Domain 2 (Asset management) → Steps 5–6 (inventory → classification)
- Domain 3 (Risk analysis) → Step 7
- Domain 4 (Awareness) → Step 8
- Domain 5 (Access control) → Step 9
- Domain 6 (Infrastructure security) → Steps 10–12 (backups → updates → encryption)
- Domain 7 (Monitoring) → Step 13
- Domain 8 (Incident management) → Step 14
- Domain 9 (Recovery) → Step 15

Each step is a self-contained task the school can complete in 30–90 minutes.

---

## Data Model (localStorage)

The site stores a JSON blob in localStorage:

```json
{
  "zik_version": "1.0",
  "score": 7,
  "completed_steps": [1, 2, 3, 4, 5, 6, 7],
  "fields": {
    "coordinator_name": "Iñaki Etxebarria",
    "coordinator_email": "i.etxebarria@ikastetxea.eus",
    "coordinator_phone": "+34 666 111 222",
    "school_name": "Plaiaundi LHII",
    "security_committee_members": ["Miren (zuzendaria)", "Iñaki (IT)", "Ane (Eraldi)"],
    "assets_server_count": "3",
    "assets_pc_count": "120",
    "backup_frequency": "daily",
    "backup_location": "NAS + cloud",
    "mfa_enabled": true,
    "incident_coordinator_name": "Iñaki Etxebarria",
    "...": "..."
  }
}
```

Fields are populated as the user fills in inputs across steps. The same field (e.g., `coordinator_name`) can be displayed in multiple steps and in generated templates.

---

## Template Generation (with user data)

Templates are authored as Markdown with **placeholders** (`{{coordinator_name}}`, `{{school_name}}`, etc.).

When a user downloads a template:
1. The Markdown source is loaded.
2. Placeholders are replaced with values from localStorage.
3. The result is converted to DOCX + PDF via the existing pipeline (markdown-it → weasyprint / pandoc → python-docx).
4. The file is downloaded.

If a placeholder references an empty field, the template shows a blank (or "________") so the user can fill it later manually.

At the end (step 15), the user clicks "Deskargatu dena" (Download everything) and gets a ZIP with all 5 templates populated.

---

## UI / UX Design

### Layout

- Starlight's standard documentation layout (sidebar + content + table of contents).
- **Left sidebar**: 15 steps listed. Current step highlighted. Completed steps show ✓.
- **Top bar**: Zik maturity score badge (e.g., "Zik 8/15") + language switcher.
- **Content area**: Step content + input fields + checkboxes + "Next step" button.
- **Bottom bar / footer**: Download current templates, reset progress.
- **Export drawer** (step 15 or accessible anytime): List of all templates with download buttons; "Download all as ZIP" at the bottom.

### States

| State | Behavior |
|-------|----------|
| First visit | Show landing page with overview. No data stored. Score: 0/15. |
| In progress | Sidebar shows ✓ for completed steps. Score badge shows e.g., 8/15. Data in localStorage. |
| All complete | Score: 15/15. Step 15 shows export option. Celebration animation/message. |
| Data cleared | Reset button returns to first-visit state. Confirmation dialog to prevent accidents. |
| Language switch | Data persists across languages (same localStorage key). Content language changes, field values remain. |

---

## Tech Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Static site generator** | **Astro + Starlight** | Documentation theme with built-in i18n, Pagefind search, zero-JS by default, beautiful design. |
| **Client-side interactivity** | **Preact / React (Astro islands)** — minimal | Only the interactive parts (maturity score, localStorage, field inputs, template download) use JS. All informational content is static. |
| **State management** | **localStorage** + reactive context | Simple, no backend. Astro islands share state via a reactive store. |
| **Templates (Markdown → DOCX/PDF)** | `uv`-managed Python script: `markdown-it-py` + `weasyprint` + `pandoc`/`python-docx` | Same as current. With `{{placeholders}}` support — simple string replace before rendering. |
| **ZIP creation** | `JSZip` (client-side) | Generate ZIP with all populated templates in the browser for direct download. |
| **Hosting** | GitHub Pages | Free, zero-maintenance. Deploy via GitHub Actions on push to `main`. |
| **i18n** | Starlight i18n (built-in) + custom Basque UI strings | Basque root (`/`), Spanish under `/es/`. Basque UI strings via `src/content/i18n/eu.json`. |
| **Search** | Pagefind (Starlight built-in) | Zero-config. Works offline. Indexes reference content (legal page, glossary, step content). |
| **CI/CD** | GitHub Actions | Build site + run Python scripts + deploy to Pages. |

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────┐
│                   GitHub Repository                    │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │  src/content/docs/          ← Basque (root)       │ │
│  │    urratsak/                ← 15-step guide       │ │
│  │    legal/araudia.md         ← Legal reference     │ │
│  │    glossary/index.md        ← Glossary            │ │
│  │    templates/index.md       ← Templates page      │ │
│  │  src/content/docs/es/       ← Spanish mirror      │ │
│  │  src/content/i18n/eu.json   ← Basque UI strings   │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
│  ┌──────────────────────┐  ┌────────────────────────┐ │
│  │   src/components/     │  │   scripts/              │ │
│  │   ZikScore.astro      │  │   generate_templates.py │ │
│  │   StepChecklist.astro │  │   pyproject.toml         │ │
│  │   DataField.astro     │  │   uv.lock                │ │
│  │   ExportDrawer.astro  │  │   templates-md/          │ │
│  └──────────────────────┘  │     raci-matrizea.md     │ │
│                             │     segurtasun-politika.md│ │
│  ┌──────────────────────┐  │     arriskuen-analisia.md│ │
│  │   src/store/          │  │     mehatxuen-katalogoa.md││
│  │   zik-store.ts        │  │     gertaeren-erantzuna.md││
│  └──────────────────────┘  └────────────────────────┘ │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │        sources/  (reference documents)             │ │
│  │  NIST CSF 2.0 — PDF + MD (EN + ES)                │ │
│  │  ISO/IEC 27001:2022 — PDF + MD (gitignored)       │ │
│  │  NIS2 Directive — PDF + MD (EN)                   │ │
│  │  RGPD — PDF + MD (ES)                             │ │
│  │  LOPDGDD — PDF + MD (ES)                          │ │
│  │  ENS (RD 311/2022) — PDF + MD (ES)                │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
│  astro.config.mjs  ·  starlight config                │
│  package.json ·  compose.yaml ·  tsconfig.json        │
└──────────────────────┬───────────────────────────────┘
                       │
         GitHub Actions (build + templates + deploy)
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│                  GitHub Pages                          │
│            zik.tknika.eus  (or custom domain)          │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │  /         ← Basque (step-by-step guide)          │ │
│  │  /es/      ← Spanish                              │ │
│  │  /templates/  ← downloadable DOCX/PDF files       │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
│  Client-side only — no server, no database.            │
│  All user data in localStorage.                        │
└──────────────────────────────────────────────────────┘
```

---

## Component Tree (Interactive Islands)

```
[Page Layout]
  ├── [Header]
  │   ├── ZikScore.badge             ← Displays "Zik 8/15"
  │   ├── ProgressBar                 ← Visual progress bar
  │   └── LanguageSwitcher            ← Starlight built-in
  ├── [Sidebar]
  │   ├── StepList                    ← 15 steps, ✓ for completed
  │   │   ├── StepItem (active)        ← Current step highlighted
  │   │   └── StepItem (done)          ← Completed (✓ icon)
  │   └── ExportButton                ← Download templates (anytime)
  ├── [Content]
  │   ├── StepContent                 ← Markdown content of current step
  │   ├── DataFields                  ← Input fields for this step
  │   │   ├── TextField                ← coordinator_name, etc.
  │   │   ├── CheckboxField            ← "Done: coordinator named"
  │   │   └── SelectField             ← e.g., backup frequency dropdown
  │   ├── StepNavigation              ← "Prev step" / "Next step" buttons
  │   └── TemplatePreview             ← Optional: show what the template will look like
  └── [Footer]
      └── Attribution, license, reset button
```

---

## Milestones / Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **P0: Redesign & rearchitecture** | 1 week | New site structure (15 steps). localStorage data store. ZikScore component. Step list sidebar with progress indicators. Starlight sidebar replacement with custom step list. |
| **P1: Step content + data fields** | 5 weeks | All 15 steps written in Basque with inline data fields. Fields read/write to localStorage. Completion logic (checkboxes → step marked done → score updates). Legal reference page (static). Glossary (static). |
| **P2: Template generation with placeholders** | 2 weeks | Templates converted to placeholder-based Markdown (`{{field}}`). Python script updated to accept a JSON data file and replace placeholders before rendering. Client-side download triggers: per-step template download + "download all as ZIP" at step 15. |
| **P3: Spanish translation** | 3 weeks | All 15 steps translated to Spanish. Shared localStorage works across locales. Legal page + glossary translated. |
| **P4: Polish, UX, pilot** | 2 weeks | Score animation, celebration at 15/15. Export drawer UI. Responsive QA. WCAG AA check. Distribute to 3+ pilot schools for feedback. Iterate. |
| **P5: Launch & handoff** | 1 week | CONTRIBUTING.md. Final build + deploy. Public announcement. Handoff. |

**Total: ~14 weeks.**

---

## Key Differences vs. Current Implementation

| Current (v1) | Redesigned (v2) |
|--------------|-----------------|
| 9 domain pages — reference encyclopedia | 15 steps — linear guided path |
| No user data input | Fields populate localStorage, reused across steps and templates |
| No progress tracking | Zik maturity score (0/15 → 15/15) |
| Static sidebar with domain links | Sidebar is the step list with ✓ indicators |
| Templates are generic (empty placeholders) | Templates populated with user's actual data |
| "Here's information, good luck" | "Do this. Now do this. Here's your filled-in document." |
| Complement to original Tknika guide | Standalone tool (supersedes for target audience) |

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **localStorage limits** (~5–10 MB per origin) | Low | Low | Data model is tiny (a few KB of JSON). Template generation is client-side via Python in CI or JSZip. |
| **Browser clears localStorage** (privacy settings, incognito) | Medium | High | Show a banner: "Your data is stored in this browser only. To save it, download your templates." No server sync needed — templates are the export. |
| **Template generation too slow client-side** | Medium | Medium | Do placeholder replacement client-side (string replace — instant). Actual DOCX/PDF generation is pre-done at build time; client just downloads pre-generated files. Dynamic data embedded via JSZip + pre-filled DOCX templates with content control fields. |
| **15 steps feel overwhelming** | Medium | Medium | Group into 3 phases visually (phase 1: steps 1–5, phase 2: 6–10, phase 3: 11–15). Each step estimates time. Gamification (score, celebration). |
| **Content contradicts original guide** | Low | Low | Zik is a separate tool. It no longer tries to "complement" — it supersedes for the "getting started" audience. Link to original guide for deeper reference. |
| **Fields change between steps** (user edits name in step 3, already used in step 1) | Low | Low | All fields are global. Editing in any step updates everywhere. This is correct behavior. |

---

## Success Metrics

1. **Completion:** A school can complete all 15 steps in under 2 weeks (steps 30–90 min each).
2. **Template usefulness:** A school leaves with at least 3 populated, usable documents.
3. **Clarity:** Each step explains what, why, and how in under 300 words.
4. **Maturity tracking:** The Zik score accurately reflects the school's progress through the 15 steps.
5. **Bilingual:** All 15 steps available in Basque and Spanish.
6. **Pilot feedback:** ≥3 schools provide positive feedback on the guided-path approach.
7. **Zero dependency on backend:** All functionality works offline after initial page load.

---

## Key Decisions Recorded

| Decision | Rationale |
|----------|-----------|
| **15-step linear path** over 9-domain reference | Schools need a sequence, not a category index. Sequential steps enable progress tracking and template data reuse. |
| **localStorage for user data** | No backend needed. Data is tiny. Templates are the persistence mechanism (user downloads them). |
| **Placeholder-based templates** | Single Markdown source per template. Same source used for static generation (with `{{placeholders}}` left as-is) and dynamic downloads (with placeholders filled from localStorage). |
| **Client-side ZIP generation (JSZip)** | No server needed. User clicks "Download all", browser creates ZIP in-memory, triggers download. |
| **Phase grouping inside the 15 steps** | Reduces cognitive load. Shows progress within the larger journey. |
| **Score displayed persistently** | Gamification. Social proof for the school (can show the board "we're at 12/15"). |
| **Basque root locale** | Same as v1 — Basque-first. Spanish underneath. |
| **No server, no accounts, no tracking** | Simplicity. Privacy. No GDPR concerns for the tool itself. |
