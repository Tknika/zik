---
version: alpha
name: Zik — Zibersegurtasuna Ikastetxeetan
description: Design system for a cybersecurity governance guide aimed at Basque vocational training colleges
colors:
  primary: "#1e293b"
  primary-light: "#334155"
  primary-dark: "#0f172a"
  accent: "#0d9488"
  accent-hover: "#0f766e"
  accent-pale: "#f0fdfa"
  surface: "#ffffff"
  surface-alt: "#f1f5f9"
  text: "#0f172a"
  text-secondary: "#475569"
  text-muted: "#64748b"
  text-on-dark: "#e2e8f0"
  text-on-dark-muted: "#94a3b8"
  border: "#cbd5e1"
  border-light: "#e2e8f0"
  success: "#15803d"
  warning: "#b45309"
  danger: "#dc2626"
  info: "#0d9488"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: "700"
    lineHeight: 1.3
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 1.625rem
    fontWeight: "600"
    lineHeight: 1.35
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: "600"
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: "400"
    lineHeight: 1.7
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "400"
    lineHeight: 1.7
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: "600"
    lineHeight: 1.4
    letterSpacing: 0.04em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  3xl: 4rem
  page-gutter: 1rem
  content-width: 48rem
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  hero-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
  callout-info:
    backgroundColor: "#f0f5fb"
    textColor: "{colors.info}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  table-header:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.sm}"
---

## Brand & Style

Zik is a cybersecurity governance guide for Basque Country vocational training
colleges (Lanbide Heziketa). The design must convey **institutional trust**,
**clarity**, and **actionable simplicity**.

The visual language is **"Government + Tech"** — not a flashy startup, not a
playful edu-app. Think of a well-designed government digital service (GOV.UK,
euskadi.eus) blended with modern documentation (Stripe Docs, Linear Blog).
Clean, authoritative, scannable.

Target audience: school directors, IT coordinators, and teachers with no
cybersecurity background. The design must reduce anxiety about security
compliance while establishing credibility.

## Colors

The palette is rooted in deep navy blue for authority, with a Basque-inspired
warm red accent for interaction.

- **Primary (#1A2942):** Deep navy — institutional, trustworthy, stable. Used for
  the header, sidebar background, table headers, and dark surface areas. Evokes
  government authority without being cold.
- **Accent (#C8483F):** Basque red — warm, urgent enough for CTAs but not
  alarmist. Used exclusively for primary buttons, links, and important
  highlights. The sole driver of interaction.
- **Surface (#FFFFFF):** Clean white for content areas — maximizes readability
  for long-form documentation.
- **Surface Alt (#F5F6F8):** Subtle warm gray for alternating rows, callout
  backgrounds, and secondary surfaces.
- **Text (#1A1C1E):** Near-black for body text — high contrast for long reading
  sessions.
- **Success (#2D7D46):** A natural green for checklist completions and positive
  indicators. Not too bright — professional, vegetal.
- **Danger (#C8483F):** Same as accent — critical alerts share the same urgent
  color.

## Typography

Single font family: **Inter**. Professional, neutral, designed for screens.
Good x-height and clear letterforms at all sizes. Variable font is used for
weight transitions without loading multiple files.

- **Headings:** Inter Semi-Bold (600-700 weight). Slightly negative letter
  spacing for h1/h2 to feel tight and confident. Clear hierarchy: h1 (36px),
  h2 (26px), h3 (20px).
- **Body:** Inter Regular at 16px with 1.7 line height — generous spacing for
  long-form documentation readability.
- **Labels:** Inter Semi-Bold at 12px with 0.04em letter spacing for buttons,
  badges, and navigation.
- **Mono:** JetBrains Mono for code, commands, and technical strings.

## Layout & Spacing

Content-first single column layout with a fixed left sidebar (Starlight default).

- Max content width: 48rem (768px) — optimal for reading.
- Spacing scale based on 0.25rem units (4px base).
- Generous vertical rhythm: content blocks separated by at least 1.5rem.
- Checklists get distinct visual treatment: light gray background cards.

## Elevation & Depth

Flat design with minimal elevation. No heavy shadows — the contrast between
the dark sidebar and white content area creates natural visual hierarchy.

- Sidebar receives the primary dark color as a solid background.
- Content area is clean white, slightly raised by the sidebar's darkness.
- Cards and callouts use 1px borders, not shadows.
- The hero/CTA area on the homepage uses the dark primary with white text
  for dramatic contrast.

## Shapes

Conservative, clean. 8px corner radius for buttons and cards (rounded-md).
Table headers and sidebar items have subtle 4px radius. No decorative shapes
or circles — this is documentation, not marketing.

## Components

### Header & Navigation

Dark navy sidebar with white text. Active page indicator is the accent red
left border. Hover states lighten the background subtly. No icon distractions
— text labels only in sidebar items.

### Call-to-Action Button

The primary CTA ("Hasi orain →") is the only element that uses the warm
accent red. It appears on the homepage hero (white text, accent background)
and in key action areas. This color should appear nowhere else except links
and critical alerts — it carries the weight of "click here to act."

### Checklists

Checklist items receive a subtle background card (`surface-alt`), 1px border,
and the unchecked checkbox is an empty border square. This visual treatment
makes the page feel actionable and trackable — like a printed worksheet.

### Tables

Table headers use the primary dark navy with white text. Alternating rows
use `surface-alt`. Borders are light gray (`border-light`). Tables are
compact but readable.

### Callouts and Admonitions

Standard Starlight admonitions (info, tip, warning, danger) are restyled
with the Zik palette. Info callouts use a very light blue background with
a matching left border. Warning uses pale amber. Danger uses the accent
pale background.

### Download Links

Template download links use pill-shaped buttons with `border` outline,
small size, no fill. On hover, fill with `surface-alt`.

## Do's and Don'ts

- Do use accent red only for CTAs, links, and critical alerts
- Do maintain generous whitespace — this is a reading experience
- Do use the checklist card treatment on every function page
- Don't introduce new colors outside the defined palette
- Don't use shadows for elevation — rely on color contrast
- Don't use icons in the sidebar — text-only for speed and clarity
- Don't make the design playful or cartoonish — it undermines trust
