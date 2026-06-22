# Zik — Implementation Plan v2

## Overview

This plan describes how to build Zik v2: a **step-by-step guided tool** for Basque Country VET colleges to achieve basic cybersecurity governance. The site is a 15-step linear path with progress tracking (Zik maturity score), client-side data persistence (localStorage), and template generation populated with user data.

---

## Phases at a Glance

| Phase | Weeks | Focus |
|-------|-------|-------|
| **P0: Rearchitecture** | 1 | Redesign site structure (15 steps). localStorage data store. ZikScore component. Step list sidebar. |
| **P1: Step content + data fields** | 5 | All 15 steps written in Basque with inline data fields. Completion logic. Legal + glossary static pages. |
| **P2: Template generation with placeholders** | 2 | Placeholder-based templates. Client-side download with user data. ZIP export. |
| **P3: Spanish translation** | 3 | All 15 steps + legal + glossary translated. |
| **P4: Polish, UX, pilot** | 2 | Score animation, export drawer, responsive QA, WCAG AA, pilot feedback. |
| **P5: Launch & handoff** | 1 | CONTRIBUTING.md, final deploy, announcement, handoff. |

**Total: ~14 weeks.**

---

## Phase 0: Rearchitecture (Week 1)

### 0.1 — Define the 15-step sequence
- **Actions:**
  - Map the current 9 domains into 15 sequential, action-oriented steps.
  - Each step must be completable in 30–90 minutes.
  - Each step must produce at least one data field stored in localStorage.
- **Deliverable:** Step list document with titles, descriptions, and associated data fields.

#### Step list draft:

| Step | Title | Key fields | Produces |
|------|-------|------------|----------|
| 1 | Izendatu zibersegurtasun-arduraduna | name, email, phone | — |
| 2 | Idatzi segurtasun-politika (orrialde bat) | school_name, policy_date, policy_text | Segurtasun-politika template |
| 3 | Sortu segurtasun-batzordea | committee_members[] | — |
| 4 | Definitu rolak (RACI matrizea) | raci_roles[] | RACI matrizea template |
| 5 | Egin aktiboen inbentarioa | assets[] | — |
| 6 | Sailkatu informazioa | classification_levels | — |
| 7 | Egin arriskuen analisia | risks[] | Arriskuen analisia template |
| 8 | Prestatu sentsibilizazio-saio bat | training_date, training_attendees | — |
| 9 | Konfiguratu atzipen-kontrola eta MFA | mfa_enabled, password_policy | — |
| 10 | Ezarri 3-2-1 babeskopiak | backup_frequency, backup_location, backup_mediums[] | — |
| 11 | Eguneratu sistema guztiak | update_schedule, auto_updates_enabled | — |
| 12 | Aktibatu zifraketa | disk_encryption, wifi_encryption, https_status | — |
| 13 | Aktibatu oinarrizko monitorizazioa | av_status, logging_enabled, alerts_configured | — |
| 14 | Idatzi intzidentzien erantzun-plana | incident_team[], incident_coordinator | Gertaeren erantzun-plana template |
| 15 | Probatu berreskurapena + esportatu dena | recovery_test_date, rto_values[] | ZIP export (all templates) |

### 0.2 — Redesign site structure
- **Actions:**
  - Remove `src/content/docs/domains/` → replace with `src/content/docs/urratsak/`.
  - Each step is its own MD file: `01-arduraduna.md` through `15-berreskuratzea.md`.
  - Keep `legal/araudia.md`, `glossary/index.md`, `templates/index.md` as static reference pages.
  - The sidebar must show the 15-step list (not the old domain list).
  - Create `src/content/docs/urratsak/index.md` as the guide overview/maturity dashboard.
- **Files to remove:** `src/content/docs/domains/` (all 9 files + ES mirrors).
- **Files to create:** `src/content/docs/urratsak/` (15 files + index).

### 0.3 — Create the localStorage data store
- **File:** `src/store/zik-store.ts`
- **Responsibilities:**
  - Define the `ZikData` TypeScript interface (all fields).
  - Provide `getData()`, `setField(key, value)`, `resetData()`.
  - Provide `getCompletedSteps()`, `markStepComplete(step)`, `markStepIncomplete(step)`.
  - Provide `getScore()` → `{ completed: number, total: 15 }`.
  - Persist to `localStorage` under key `zik-data`.
  - Initialize with defaults on first visit.
- **Test:** Store survives page refresh. Fields read back correctly. Reset clears everything.

### 0.4 — Build ZikScore component
- **File:** `src/components/ZikScore.astro` (Astro component, may embed a small island)
- **UI:** Badge in top-right corner showing "Zik 8/15" with a micro progress bar.
- **States:** 0/15 (starting), 1–14/15 (in progress), 15/15 (complete, celebration).
- **Reactivity:** Re-reads from localStorage on mount. Updates when any step changes.

### 0.5 — Build step list sidebar
- **File:** Starlight sidebar override via `astro.config.mjs` — or a custom component.
- **UI:** 15 items listed. Current step highlighted. Completed steps show ✓. Score at top.
- **Navigation:** Clicking a step navigates to it. Steps can be visited out of order.
- **Phase grouping:** Optionally show phases (1–5, 6–10, 11–15) as collapsible sections.

### 0.6 — Build DataFields component
- **File:** `src/components/DataFields.astro` (or a Preact island)
- **Input types:** TextField, TextArea, Checkbox, Select.
- **Schema-driven:** Each step defines which fields it needs. The component renders them.
- **Persistence:** onChange → `setField(key, value)` → localStorage.
- **Display:** Shows current value if already filled (from previous steps).

---

## Phase 1: Step Content + Data Fields (Weeks 2–6)

### 1.1 — Write step 1–5 content (Basque)
- Each step MD file includes:
  - Frontmatter: `title`, `step_number`, `estimated_time`.
  - `:::info` callout with NIST/ISO reference.
  - "Zergatik da garrantzitsua?" section.
  - "Egin beharrekoak" — numbered action list.
  - `<DataFields>` component with fields for this step.
  - Completion checklist (checkboxes mapped to step completion).
  - "← Aurrekoa | Hurrengoa →" navigation.

### 1.2 — Write step 6–10 content (Basque)
- Same structure as 1.1.

### 1.3 — Write step 11–15 content (Basque)
- Same structure. Step 15 includes export drawer and "Deskargatu dena" button.

### 1.4 — Write legal reference page (Basque)
- Static page in `src/content/docs/legal/araudia.md`.
- Summarizes NIS2, RGPD, ENS. Links to official sources.
- Not part of the 15-step score — it's reference material.

### 1.5 — Write glossary page (Basque)
- Static page in `src/content/docs/glossary/index.md`.
- 30+ terms. Table format.

### 1.6 — Wire up completion logic
- When all checkboxes in a step are checked → step marked complete.
- Score updates reactively.
- Sidebar shows ✓.
- localStorage updated.

---

## Phase 2: Template Generation with Placeholders (Weeks 7–8)

### 2.1 — Convert templates to placeholder format
- Replace hardcoded example values in `scripts/templates-md/*.md` with `{{field_name}}` placeholders.
- Templates:
  - `raci-matrizea.md` → uses `{{raci_roles}}`, `{{coordinator_name}}`
  - `segurtasun-politika.md` → uses `{{school_name}}`, `{{policy_date}}`, `{{coordinator_name}}`
  - `arriskuen-analisia.md` → uses `{{risks}}`, `{{school_name}}`
  - `mehatxuen-katalogoa.md` → uses `{{risks}}`, `{{school_name}}`
  - `gertaeren-erantzuna.md` → uses `{{incident_team}}`, `{{coordinator_name}}`, `{{school_name}}`
- Each template also needs a "blank" version (placeholders left as-is) for static download on the templates page.

### 2.2 — Update Python generation script
- Accept a `--data` flag pointing to a JSON file with field values.
- Before rendering Markdown → HTML, replace `{{field}}` with values from JSON.
- Missing values → render as `________` (blank line).
- Output: `public/templates/{name}.pdf` and `.docx` for both the blank version and — when running locally — a filled version.

### 2.3 — Build client-side template download
- **Component:** `src/components/TemplateDownload.astro` island.
- Reads template Markdown from a static source (fetched from `/templates-md/` or embedded in the component).
- Replaces `{{placeholders}}` with values from localStorage.
- Converts to HTML (simple markdown-to-HTML in JS) or passes to a pre-built pipeline.
- Triggers browser download of the populated text.
- For DOCX/PDF: the actual file generation stays server/build-side. Client downloads pre-generated files. Dynamic data embedded via DOCX content controls (pre-filled) or a companion `.json` that the user can import.

### 2.4 — Build ZIP export (step 15)
- **Library:** JSZip (client-side, no server needed).
- Step 15 shows an "Esportatu dena" (Export everything) drawer:
  - List of all 5 templates with "Deskargatu" buttons.
  - "Deskargatu dena ZIP batean" button.
  - Each template is populated with localStorage data.
  - ZIP contains: populated Markdown versions of each template + a `data.json` backup of all fields.
- After download, celebration message: "Zorionak! 15/15 urrats bete dituzu. Zure ikastetxeak oinarrizko zibersegurtasun-gobernantza ezarri du."

---

## Phase 3: Spanish Translation (Weeks 9–11)

### 3.1 — Translate all 15 steps
- Mirror `src/content/docs/urratsak/` to `src/content/docs/es/urratsak/`.
- Same frontmatter structure, translated content.
- Same DataFields references (fields are language-agnostic).

### 3.2 — Translate static pages
- `legal/araudia.md` → `es/legal/araudia.md`
- `glossary/index.md` → `es/glossary/index.md`
- `templates/index.md` → `es/templates/index.md`

### 3.3 — Translate UI strings
- Update `src/content/i18n/eu.json` and `es.json` with step-specific strings ("Aurrekoa", "Hurrengoa", "Osatu", "Deskargatu", etc.).

### 3.4 — Test bilingual data persistence
- User switches from Basque to Spanish: step content changes language, field values persist, score persists.
- Templates populated with data correctly regardless of current locale.

---

## Phase 4: Polish, UX, Pilot (Weeks 12–13)

### 4.1 — Score animation and celebration
- Animate score changes (count up from old value to new value).
- At 15/15: confetti or celebration banner. "Zorionak!" message in both languages.

### 4.2 — Export drawer UI
- Accessible from step 15 and from a persistent button in the sidebar.
- Shows all templates, which have user data, which are still blank, and download buttons.

### 4.3 — Responsive QA
- ZikScore badge visible and non-obstructive on mobile.
- Step sidebar collapses to hamburger on mobile (Starlight default).
- DataFields inputs are mobile-friendly (large tap targets).
- Tables don't overflow.

### 4.4 — Accessibility audit (WCAG 2.1 AA)
- ZikScore badge is ARIA-live for screen readers ("Score updated to 8 of 15").
- DataFields inputs have proper labels.
- Checkboxes are keyboard-navigable.
- Skip link works.
- Color contrast verified.

### 4.5 — Pilot distribution
- Deploy to GitHub Pages.
- Share with 3+ schools (Eraldi teams).
- Feedback form:
  - "How many steps did you complete?"
  - "Were the instructions clear?"
  - "Did you download any templates? Were they useful?"
  - "What was missing?"
  - "Would you recommend this to another school?"
  - Final Zik score (optional field).

### 4.6 — Iterate on feedback
- Fix bugs, clarify confusing steps, add missing fields.

---

## Phase 5: Launch & Handoff (Week 14)

### 5.1 — Write CONTRIBUTING.md
- How to add/edit steps.
- How to add fields to the data model.
- How the template placeholder system works.
- i18n workflow.
- PR and review process.

### 5.2 — Finalize LICENSE files
- `LICENSE` (MIT) for code.
- `LICENSE-content` (CC BY-SA 4.0) for content and templates.

### 5.3 — Final deploy
- Custom domain (if available) or `tknika.github.io/zik/`.
- HTTPS verified.
- Broken link check.

### 5.4 — Announcement
- Basque + Spanish announcement for Tknika channels.
- Internal mailing list, website, social media.
- Optionally present at a Tknika Eraldi meeting.

### 5.5 — Handoff
- Walkthrough with content owners.
- Document deploy workflow (push to main = auto-deploy).
- Transfer repo admin rights.

---

## Task Dependencies

```
P0: Rearchitecture
  0.1 ──→ 0.2 ──→ 0.3 ──→ 0.4 ──→ 0.5 ──→ 0.6

P1: Step content
  1.1 ──→ 1.2 ──→ 1.3
  1.4 ═══ 1.5 ═══ 1.6 ← depends on 0.6

P2: Templates
  2.1 ──→ 2.2 ──→ 2.3 ──→ 2.4
  ← depends on P0 + at least steps 1-4 content

P3: Spanish
  3.1 ──→ 3.2 ──→ 3.3 ──→ 3.4
  ← depends on P1 + P2

P4: Polish
  4.1 ═══ 4.2 ═══ 4.3 ═══ 4.4
  4.5 ═══ 4.6 (after 4.5)
  ← depends on P3

P5: Launch
  5.1 ═══ 5.2 (independent)
  5.3 ──→ 5.4 ──→ 5.5
  ← depends on P4
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                      │
│                                                           │
│  ┌─────────────┐   ┌──────────┐   ┌───────────────────┐  │
│  │ DataFields   │──→│ zik-store│←──│ ZikScore          │  │
│  │ (inputs)     │   │ .ts      │   │ (reads score)     │  │
│  └─────────────┘   └────┬─────┘   └───────────────────┘  │
│                         │                                  │
│                    localStorage                           │
│                    key: "zik-data"                         │
│                         │                                  │
│  ┌──────────────────────┼──────────────────────────────┐  │
│  │ TemplateDownload      │                              │  │
│  │ 1. read localStorage  │                              │  │
│  │ 2. fetch template.md  │                              │  │
│  │ 3. replace {{field}}  │                              │  │
│  │ 4. trigger download   │                              │  │
│  └───────────────────────┘                              │  │
│                                                           │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Export all (step 15)                                │  │
│  │ 1. For each template: do TemplateDownload           │  │
│  │ 2. Add data.json backup                             │  │
│  │ 3. Pack into ZIP (JSZip)                            │  │
│  │ 4. Trigger download                                 │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Definition of Done

A step is **Done** when:
1. Content written in Basque (and Spanish, after P3).
2. DataFields component correctly reads/writes associated fields.
3. Completion checkboxes work (step marked complete, score updates).
4. Navigation (prev/next) works.
5. Associated template (if any) generates correctly with user data.
6. Content reviewed for accuracy against NIST/ISO/legal sources.

The **project** is Done when:
- [ ] All 15 steps published in Basque and Spanish.
- [ ] Zik maturity score functional and persistent.
- [ ] All data fields defined, functional, and persisted in localStorage.
- [ ] All 5 templates downloadable with user data populated.
- [ ] ZIP export working at step 15.
- [ ] Static pages (legal, glossary) published in both languages.
- [ ] Site passes WCAG 2.1 AA check.
- [ ] Responsive on mobile/tablet/desktop.
- [ ] ≥3 pilot schools provide positive feedback.
- [ ] CONTRIBUTING.md and LICENSE files committed.
- [ ] Public announcement sent.
- [ ] Content maintainers onboarded.
