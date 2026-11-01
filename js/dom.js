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

(globalThis.ACCA ??= {}).dom = { el, richText };
