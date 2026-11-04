'use strict';

// Content is always inserted as text, never as HTML.
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [name, value] of Object.entries(attrs)) {
    if (name === 'class') node.className = value;
    else if (name.startsWith('on')) node.addEventListener(name.slice(2), value);
    else if (value === true) node.setAttribute(name, '');
    else if (value !== false && value !== undefined && value !== null) node.setAttribute(name, value);
  }
  for (const child of children.flat()) {
    if (child !== null && child !== undefined && child !== false) node.append(child);
  }
  return node;
}

// Russian and Uzbek words get their official English exam term beside them,
// and glossary terms become buttons that show their meaning.
function termNodes(text, enText, lang, seen = new Set()) {
  const terms = globalThis.ACCA?.terms;
  const glossary = globalThis.ACCA?.glossary;
  const parts = lang === 'en' || !terms ? [{ text }] : terms.annotate(text, enText, lang, seen);
  return parts.flatMap((part) => {
    if (!part.term) return glossary ? glossary.link(part.text, lang, seen, enText) : [part.text];
    const chip = el('span', { class: 'tl' }, part.text, el('small', { lang: 'en' }, part.term));
    const entry = glossary?.byLabel(part.term, seen);
    return entry ? glossary.button(entry, lang, chip) : chip;
  });
}

// Worked answers mark their lines: "# " a step title, "= " a result, "! " a trap to avoid,
// and two leading spaces a line of working.
const STEP_LINE = /^(# |= |! | {2})/;

function stepLine(line, inline) {
  if (line.startsWith('# ')) return el('p', { class: 'step-title' }, inline(line.slice(2)));
  if (line.startsWith('= ')) return el('p', { class: 'step-result' }, inline(line.slice(2)));
  if (line.startsWith('! ')) return el('p', { class: 'step-trap' }, inline(line.slice(2)));
  if (line.startsWith('  ')) return el('p', { class: 'step-line working' }, inline(line.trim()));
  if (line.startsWith('- ')) return el('p', { class: 'step-line bullet' }, inline(line.slice(2)));
  return el('p', { class: 'step-line' }, inline(line));
}

function block(text, enText, lang, seen, link) {
  const lines = text.split('\n');
  const enLines = enText.split('\n');
  const enFor = (j) => (enLines.length === lines.length ? enLines[j] : enText);
  const inline = (t, en) => (link ? termNodes(t, en, lang, seen) : [t]);
  if (lines.every((line) => line.startsWith('- '))) {
    return el('ul', {}, lines.map((line, j) => el('li', {}, inline(line.slice(2), enFor(j).replace(/^- /, '')))));
  }
  if (lines.some((line) => STEP_LINE.test(line))) {
    return el('div', { class: 'steps' }, lines.map((line, j) => stepLine(line, (t) => inline(t, enFor(j)))));
  }
  return el('p', {}, inline(text, enText));
}

function richText(text) {
  return text.trim().split(/\n\s*\n/).map((b) => block(b, b, 'en', null, false));
}

function richTextT(field, lang, seen = new Set()) {
  const enBlocks = field.en.trim().split(/\n\s*\n/);
  const blocks = field[lang].trim().split(/\n\s*\n/);
  return blocks.map((b, i) => block(b, enBlocks.length === blocks.length ? enBlocks[i] : field.en, lang, seen, true));
}

(globalThis.ACCA ??= {}).dom = { el, richText, richTextT, termNodes };
