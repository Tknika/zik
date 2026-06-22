---
version: 2
name: Zik — Zibersegurtasuna Ikastetxeetan
description: Design system inspired by code.claude.com — warm, editorial, book-like
colors:
  paper: "#fdfcf7"
  paper-hover: "#f5f2ec"
  paper-active: "#ece8de"
  white: "#ffffff"
  ink: "#0e0e0e"
  ink-secondary: "#3d3d3d"
  ink-muted: "#707070"
  accent: "#d46e4a"
  accent-hover: "#b85a3a"
  accent-pale: "#fdf0ea"
  surface: "#faf9f5"
  surface-alt: "#f3f1eb"
  border: "#e0dcd3"
  border-light: "#ece8e0"
  success: "#2d6a1e"
  warning: "#8b6914"
  danger: "#b33a3a"
typography:
  font-display: "Georgia, 'Times New Roman', Times, serif"
  font-sans: "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  font-mono: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
  h1:
    fontFamily: "display"
    fontSize: "clamp(2.5rem, 5vw, 3.125rem)"
    fontWeight: "700"
    letterSpacing: "-0.02em"
    lineHeight: 1.15
  h2:
    fontFamily: "display"
    fontSize: "1.75rem"
    fontWeight: "600"
    letterSpacing: "-0.015em"
    lineHeight: 1.3
  h3:
    fontFamily: "display"
    fontSize: "1.25rem"
    fontWeight: "600"
    letterSpacing: "-0.01em"
    lineHeight: 1.35
  body:
    fontFamily: "sans"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: 1.65
  lead:
    fontFamily: "sans"
    fontSize: "1.0625rem"
    color: "#3d3d3d"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
---

## Brand & Style

Inspired by code.claude.com documentation. A warm, editorial, book-like feel — paper
tones, black text, minimal color. The only color accent is a warm terracotta orange
used sparingly for badges, active states, and special highlights.

## Colors

### Light theme (default)

The entire interface uses warm paper/cream tones. The sidebar and content area are
both light. No dark sidebar.

- **Paper (#FDFCF7):** The dominant surface color — sidebar, header, page chrome.
  A very light warm cream, like uncoated book paper.
- **Ink (#0E0E0E):** Near-black for all body text and headings. High contrast,
  authoritative.
- **Accent (#D46E4A):** Warm terracotta orange. Used ONLY for:
  - The logo/accent in the header
  - Active link underline on hover
  - Badge colors
  - Never for primary CTAs (those are black)

### Dark theme

Full dark mode: `#09090B` background, `#141414` surface, with the same warm
accent orange for interactive elements.

## Typography

- **Headings:** Georgia (serif, like Anthropic Serif Display). Large, authoritative,
  with tight letter-spacing.
- **Body:** System sans-serif (like Anthropic Sans). Clean, highly readable.
- **Code:** System monospace (SF Mono / Menlo / Consolas).
- Links are black with a subtle underline — no blue, no accent coloring.

## Components

### Sidebar
- Warm paper background matching the rest of the page.
- Active item: warm gray pill-shaped highlight (`#ECE8DE`).
- Text: dark charcoal (`#3D3D3D`), hover → black.
- No colored accents in sidebar.

### CTA Button
- Black pill (`#0E0E0E`), white text, full rounded.
- No accent color for CTAs — they use black for maximum contrast.

### Links
- Black underlined text.
- Subtle underline color (`#E0DCD3`) that darkens on hover.
- No blue, no colored links.

### Code blocks
- Warm gray background (`#FAF9F5`).
- Subtle border (`#E0DCD3`).
- Monochrome appearance.

### Tables
- Black header row with white text.
- Alternating warm gray rows.
- Clean borders.

### Callouts
- Warm gray background.
- Black left border for notes, red for warnings.
