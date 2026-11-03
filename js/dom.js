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

function richText(text) {
  return text.trim().split(/\n\s*\n/).map((block) => {
    const lines = block.split('\n');
    if (lines.every((line) => line.startsWith('- '))) {
      return el('ul', {}, lines.map((line) => el('li', {}, line.slice(2))));
    }
    return el('p', {}, block);
  });
}

// In Russian and Uzbek the official English exam term is shown beside the translated word.
function termNodes(text, enText, lang, seen) {
  const terms = globalThis.ACCA?.terms;
  if (!terms || lang === 'en') return [text];
  return terms.annotate(text, enText, lang, seen).map((part) => (part.term
    ? el('span', { class: 'tl' }, part.text, el('small', { lang: 'en' }, part.term))
    : part.text));
}

function richTextT(field, lang) {
  if (lang === 'en') return richText(field.en);
  const seen = new Set();
  const enBlocks = field.en.trim().split(/\n\s*\n/);
  const blocks = field[lang].trim().split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const enBlock = enBlocks.length === blocks.length ? enBlocks[i] : field.en;
    const lines = block.split('\n');
    const enLines = enBlock.split('\n');
    if (lines.every((line) => line.startsWith('- '))) {
      return el('ul', {}, lines.map((line, j) => el('li', {},
        termNodes(line.slice(2), enLines.length === lines.length ? enLines[j].replace(/^- /, '') : enBlock, lang, seen))));
    }
    return el('p', {}, termNodes(block, enBlock, lang, seen));
  });
}

(globalThis.ACCA ??= {}).dom = { el, richText, richTextT, termNodes };
