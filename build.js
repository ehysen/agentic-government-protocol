#!/usr/bin/env node
/* ==========================================================================
 * AGP specification site — static generator.
 *
 * This is a convenience only. The OUTPUT is plain static HTML/CSS with no
 * runtime dependencies; you can open any generated *.html directly in a
 * browser with no build step. Run `node build.js` to regenerate the pages
 * after editing content below.
 * ======================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');

const SITE = {
  name: 'Agentic Government Protocol',
  abbr: 'AGP',
  version: 'v0.1',
  repo: 'https://github.com/ehysen/agentic-government-protocol',
};

/* Bumped whenever CSS changes, to bust any cached stylesheet. */
const ASSET_VER = Date.now().toString(36);

/* Sidebar groups: [groupLabel|null, [ [slug, label], ... ] ] ------------- */
const NAV = [
  [null, [['index', 'Overview']]],
  ['Specification', [
    ['principles', 'Principles'],
    ['actors', 'Actors &amp; roles'],
    ['concepts', 'Core concepts &amp; vocabulary'],
    ['flow', 'The canonical flow'],
    ['schema', 'The schema'],
    ['authorization', 'Authorization, consent &amp; identity'],
    ['example', 'Worked example'],
  ]],
  ['For agencies', [
    ['get-started', 'Get started'],
  ]],
  ['Project', [
    ['governance', 'Governance &amp; contribution'],
    ['roadmap', 'Status &amp; roadmap'],
    ['related-work', 'Related work'],
    ['open-questions', 'Open questions'],
  ]],
  ['Reference', [
    ['glossary', 'Glossary'],
    ['faq', 'FAQ'],
  ]],
];

/* Linear order for prev/next pagination --------------------------------- */
const ORDER = ['index','principles','actors','concepts','flow','schema',
  'authorization','example','get-started','governance','roadmap',
  'related-work','open-questions','glossary','faq'];

const LABELS = {};
for (const [, items] of NAV) for (const [slug, label] of items) LABELS[slug] = label;

/* ---- small markup helpers --------------------------------------------- */
const href = (slug) => slug === 'index' ? 'index.html' : `${slug}.html`;
const h = (id, text) =>
  `<h2 class="anchored" id="${id}">${text}<a class="h-anchor" href="#${id}" aria-label="Link to this section">#</a></h2>`;
const h3 = (id, text) =>
  `<h3 class="anchored" id="${id}">${text}<a class="h-anchor" href="#${id}" aria-label="Link to this section">#</a></h3>`;

function sidebar(active) {
  let out = '';
  for (const [label, items] of NAV) {
    if (label) out += `      <p>${label}</p>\n`;
    out += '      <ul>\n';
    for (const [slug, text] of items) {
      const cur = slug === active ? ' aria-current="page"' : '';
      out += `        <li><a href="${href(slug)}"${cur}>${text}</a></li>\n`;
    }
    out += '      </ul>\n';
  }
  return out;
}

function pagination(active) {
  const i = ORDER.indexOf(active);
  const prev = i > 0 ? ORDER[i - 1] : null;
  const next = i < ORDER.length - 1 ? ORDER[i + 1] : null;
  if (!prev && !next) return '';
  let out = '\n      <nav class="pagenav" aria-label="Pagination">\n';
  if (prev) out += `        <a class="prev" href="${href(prev)}"><small>Previous</small> ← ${LABELS[prev]}</a>\n`;
  if (next) out += `        <a class="next" href="${href(next)}"><small>Next</small> ${LABELS[next]} →</a>\n`;
  out += '      </nav>\n';
  return out;
}

function layout(page) {
  const { slug, title, desc, body, wide } = page;
  const fullTitle = slug === 'index'
    ? `${SITE.name} (${SITE.abbr}) — An open standard for agent-mediated government service delivery`
    : `${LABELS[slug].replace(/&amp;/g, '&')} — ${SITE.abbr}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullTitle}</title>
  <meta name="description" content="${desc}">
  <link rel="stylesheet" href="assets/styles.css?v=${ASSET_VER}">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%231d4ed8'/%3E%3Cg fill='none' stroke='white' stroke-width='4' stroke-linecap='round'%3E%3Ccircle cx='20' cy='20' r='6'/%3E%3Ccircle cx='44' cy='20' r='6'/%3E%3Ccircle cx='32' cy='46' r='6'/%3E%3Cpath d='M24 24 28 40M40 24 36 40M26 20h12'/%3E%3C/g%3E%3C/svg%3E">
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>

<header class="site-header">
  <div class="site-header__inner">
    <a class="brand" href="index.html">
      <svg class="brand__mark" viewBox="0 0 64 64" role="img" aria-label="${SITE.abbr} logo">
        <rect width="64" height="64" rx="14" fill="#1d4ed8"/>
        <g fill="none" stroke="white" stroke-width="4" stroke-linecap="round">
          <circle cx="20" cy="20" r="6"/><circle cx="44" cy="20" r="6"/><circle cx="32" cy="46" r="6"/>
          <path d="M24 24 28 40M40 24 36 40M26 20h12"/>
        </g>
      </svg>
      <span>
        <span class="brand__name">${SITE.name}</span><br>
        <span class="brand__sub">An open standard for agent-mediated public service delivery</span>
      </span>
    </a>
    <span class="header-spacer"></span>
    <span class="status-badge" title="Early strawman; conceptual, not yet machine-readable">${SITE.version} · Beta</span>
    <nav class="header-links" aria-label="External">
      <a href="${SITE.repo}">GitHub</a>
      <a href="governance.html">Governance</a>
    </nav>
  </div>
</header>

<div class="layout">
  <aside class="sidebar">
    <input type="checkbox" id="nav-toggle" class="nav-toggle" hidden>
    <label for="nav-toggle" class="nav-toggle-label">Spec contents</label>
    <nav aria-label="Specification contents">
${sidebar(slug)}    </nav>
  </aside>

  <main id="main">
    <div class="content${wide ? ' wide' : ''}">
${body}
${pagination(slug)}    </div>
  </main>
</div>

<footer class="site-footer">
  <div class="site-footer__inner">
    <div>
      <strong>${SITE.name}</strong> — ${SITE.version} (strawman).<br>
      An open standard for agent-mediated public service delivery.
    </div>
    <div>
      <a href="governance.html">Governance</a> ·
      <a href="${SITE.repo}">GitHub</a> ·
      <a href="glossary.html">Glossary</a> ·
      <a href="faq.html">FAQ</a><br>
      Licensed under Apache 2.0 (proposed). Conceptual specification.
    </div>
  </div>
</footer>
</body>
</html>
`;
}

/* ======================================================================== *
 *  PAGE CONTENT
 * ======================================================================== */
const PAGES = require('./content.js')({ h, h3, SITE });

/* ---- write ------------------------------------------------------------- */
const outDir = __dirname;
let count = 0;
for (const page of PAGES) {
  const file = path.join(outDir, href(page.slug));
  fs.writeFileSync(file, layout(page));
  count++;
}
console.log(`Generated ${count} pages.`);
