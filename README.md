# Agentic Government Protocol (AGP) — v0.1 specification site

A small, fast, accessible **static** website that presents AGP v0.1: an open
standard for the service-delivery flow between **constituents**, their
**agents**, **intermediaries**, and **government agencies**.

> **Status:** Early v0.1 strawman — a *narrative + conceptual* specification, not
> yet a machine-readable schema or reference implementation. Published to invite
> scrutiny and co-authorship.

## View it

It's plain static HTML/CSS with **no runtime dependencies and no build step
required to view**. Either:

```bash
# Option A — just open the file
open index.html              # macOS  (use xdg-open on Linux)

# Option B — serve locally (nicer for clicking around)
python3 -m http.server 8000  # then visit http://localhost:8000
```

Everything renders fully offline. There are no external CDNs, fonts, or scripts.

## File structure

```
.
├── index.html              # Overview / mission (entry point)
├── principles.html         # Design principles
├── actors.html             # The four actors + actor-relationship SVG
├── concepts.html           # Core vocabulary + extension mechanism
├── flow.html               # The canonical 5-step flow + flow SVG  ← the heart
├── authorization.html      # Authorization / consent / identity (the named gap)
├── data-model.html         # Overlay-not-dictionary; NIEM / MCP / validate-after
├── example.html            # Worked example: SNAP after a job loss
├── governance.html         # Nonprofit home, license, RFC process, co-authorship
├── roadmap.html            # Status & roadmap (what's in v1 / deferred)
├── open-questions.html     # Genuinely open questions (surfaced, not resolved)
├── glossary.html           # Definitions
├── faq.html                # Frequently asked questions
├── assets/
│   └── styles.css          # Single self-contained stylesheet
├── build.js                # Optional static generator (see below)
├── content.js              # Page content (edit here, then regenerate)
├── vercel.json             # Static-site config for Vercel
└── README.md
```

## How it's built (and how to extend it)

The `*.html` files are the deliverable. To keep the shared chrome — header,
sidebar navigation, footer, and prev/next pagination — **identical and accessible
on every page**, they are generated from two small, dependency-free Node files:

- **`build.js`** — the layout: `<head>`, header, sidebar nav (with the correct
  `aria-current`), footer, and pagination, derived from a single `NAV` structure
  and page `ORDER`.
- **`content.js`** — the actual spec prose for each page, as an array of
  `{ slug, desc, body }` objects.

To change content or add a page:

```bash
# 1. Edit content.js (and add the slug to NAV + ORDER in build.js for a new page)
# 2. Regenerate the static HTML
node build.js
```

This emits plain static files with no dependencies — the generator is a
convenience, **not** a runtime requirement. You can also hand-edit the generated
HTML directly if you prefer; just keep the shared nav in sync.

## Design notes

- **Accessibility (target WCAG 2.1 AA):** semantic landmarks (`header`, `nav`,
  `main`, `footer`), a single `<h1>` per page with ordered headings, a skip link,
  visible focus styles, keyboard-navigable nav (no JS required), AA-contrast
  palette, and `role="img"` + `<title>`/`<desc>` on both inline SVG diagrams.
- **Self-contained:** one local stylesheet, inline SVG diagrams and favicon, no
  external requests.
- **Minimal JS:** none. The mobile nav toggle is a CSS-only checkbox.
- **Tone:** restrained, technical, standards-document — modeled on the
  information architecture of the precedents below.

## Precedents

AGP inherits structure and design decisions from three working standards:

- **ACP** (Agentic Commerce Protocol) — flow decomposition and the
  *agency-of-record* control model.
- **VIP** (Voting Information Project) — *publish-once, read-everywhere*
  government data and official co-authorship as the source of trust.
- **schema.org** — *small core plus extensions* vocabulary and lightweight,
  additive, adoption-driven governance.

## Deploy

The site is a static directory; any static host works. For Vercel, `vercel.json`
marks it as a static build (no framework, output is the repo root), so a plain
`vercel` / `vercel --prod` or a Git-connected import deploys it as-is.

## License

Apache 2.0 (proposed for the standard). See `LICENSE` for the repository license.
