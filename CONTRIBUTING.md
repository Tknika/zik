# Zik — Contributing

Eskerrik asko Zik proiektuan laguntzeagatik! / ¡Gracias por contribuir al proyecto Zik!

This guide explains how to contribute content, translations, templates, and code.

---

## Project overview

Zik is a static documentation website built with **Astro + Starlight**, hosted on
GitHub Pages. Content is authored in Markdown (with YAML frontmatter) and generated
into a bilingual site: **Basque** (root locale, `/`) and **Spanish** (under `/es/`).

- **Stack:** Astro 6, Starlight 0.40, Node.js 22
- **Python tooling:** `uv` (Astral) for template generation (Markdown → DOCX/PDF)
- **Hosting:** GitHub Pages via GitHub Actions

---

## Quick start

```bash
# Install dependencies
npm ci

# Start dev server (Basque root locale at http://localhost:4321/zik/)
npm run dev

# Build for production
npm run build

# Generate templates (Markdown → DOCX + PDF)
npm run templates
```

### Docker (alternative)

```bash
docker compose up -d          # Dev server on :4321
docker compose run templates  # Generate templates
```

---

## Repository structure

```
.
├── astro.config.mjs          # Astro + Starlight configuration
├── compose.yaml              # Docker Compose dev environment
├── src/
│   ├── components/           # Custom Astro components (Footer, etc.)
│   ├── content/
│   │   ├── config.ts         # Content collections config
│   │   ├── docs/             # Basque content (root locale)
│   │   │   ├── index.md      # Homepage
│   │   │   ├── roadmap/      # "Where to start" phased guide
│   │   │   ├── legal/        # Legal compliance overview
│   │   │   ├── domains/      # 9 domain guidance pages
│   │   │   ├── templates/    # Templates download page
│   │   │   └── glossary/     # Cybersecurity glossary
│   │   ├── docs/es/          # Spanish translations (mirrors docs/)
│   │   └── i18n/eu.json      # Basque UI translation strings
├── scripts/
│   ├── generate_templates.py # Markdown → DOCX + PDF
│   ├── templates-md/         # Template sources (Basque)
│   │   └── es/               # Template sources (Spanish)
│   └── pyproject.toml        # uv Python project
├── public/
│   └── templates/            # Generated DOCX/PDF files (committed)
└── sources/                  # Reference documents (NIST, ISO, laws)
```

---

## How to add or edit a page

### 1. Find the page

- Basque pages: `src/content/docs/<path>/index.md`
- Spanish pages: `src/content/docs/es/<path>/index.md`

### 2. Edit the Markdown

Pages use standard Markdown with YAML frontmatter:

```yaml
---
title: Page title (Basque or Spanish)
description: Short description for SEO
---
```

Starlight-specific features you can use:

- `:::tip[...]` / `:::caution[...]` / `:::danger[...]` — callout boxes
- `:::` — closes a callout
- Tables, lists, code blocks — standard Markdown

### 3. Preview

```bash
npm run dev
```

Visit the page at its URL. HMR updates on save.

### 4. Commit

```bash
git add src/content/docs/
git commit -m "Describe your change"
git push
```

---

## How to add a Spanish translation

1. Copy the Basque page to the Spanish mirror:  
   `src/content/docs/<path>/index.md` → `src/content/docs/es/<path>/index.md`
2. Translate the content and update the frontmatter (`title`, `description`).
3. Update internal links to point to `/es/...` paths.
4. Preview with `npm run dev` and check `/es/<path>/`.

**Fallback behavior:** If a Spanish page does not exist, Starlight shows the Basque
page with a "not yet translated" banner. You don't need to translate everything at once.

---

## How to add or edit a template

Templates are authored in Markdown and converted to DOCX + PDF at build time.

### Basque templates

1. Create or edit `scripts/templates-md/<name>.md`.
2. Generate: `npm run templates`
3. Output goes to `public/templates/<name>.pdf` and `.docx`
4. Commit both the Markdown source and the generated files.

### Spanish templates

1. Create `scripts/templates-md/es/<name>.md` (same filename as Basque).
2. Generate: `npm run templates` (processes both languages).
3. Output goes to `public/templates/es/<name>.pdf` and `.docx`

### Template generation uses:
- **PDF:** `markdown-it-py` for Markdown → HTML, `weasyprint` for HTML → PDF
- **DOCX:** `pandoc` for HTML → DOCX (fallback: `python-docx`)

---

## Sidebar configuration

The sidebar is configured in `astro.config.mjs` under `starlight.sidebar`. To add a
new section or page, edit the sidebar array. Each entry needs a `label` and a `link`
pointing to the page URL.

---

## i18n: Basque UI strings

Starlight does not ship with Basque. We maintain custom UI translations in
`src/content/i18n/eu.json`. If you add a new Starlight feature that shows English
text, translate the corresponding key in this file.

Current keys: skip link, search, theme select, language select, menu, sidebar nav,
table of contents, i18n notice, edit link, last updated, prev/next, and Pagefind.

---

## Deploy

The site deploys automatically via GitHub Actions on push to `main`. Workflow:
`.github/workflows/deploy.yml`.

The workflow:
1. Checks out the repo
2. Installs Node.js 22 + npm dependencies
3. Installs pandoc (for template DOCX generation)
4. Installs `uv` + Python dependencies
5. Runs `npm run templates` (generates DOCX/PDF)
6. Runs `npm run build` (builds Astro site)
7. Deploys `dist/` to GitHub Pages

---

## Content conventions

- **Basque-first:** Write Basque content first, Spanish translations follow.
- **Plain language:** Target school boards and Eraldi teams — avoid technical jargon.
- **Action-oriented:** Each domain page has a "What to do" section and a priority table.
- **Legal disclaimer:** Every legal page must include the disclaimer callout.
- **Cross-references:** Link to other pages (use `/path/` for Basque, `/es/path/` for Spanish).
- **Attribution:** Original Tknika guide: `tknika.github.io/zibersegurtasuna-ikastetxeetan`

---

## License

- **Content:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.eu)
- **Code:** [MIT](https://opensource.org/licenses/MIT)
