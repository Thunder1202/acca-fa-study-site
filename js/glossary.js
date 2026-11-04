'use strict';

// Every chapter's key terms, findable in any text. A page only links terms from its own
// chapter and the chapters before it, so nothing points ahead to material not yet studied.
(function () {
  const EDGE = "[\\p{L}\\p{N}'’-]";

  // "Net realisable value (NRV)" is found as either name.
  function names(text) {
    const m = text.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    return (m ? [m[1], m[2]] : [text]).map((n) => n.trim()).filter(Boolean);
  }

  function escape(text) {
    return text.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
  }

  function englishRegex(name) {
    if (/^[A-Z0-9&]{2,}$/.test(name)) return new RegExp(`(?<![\\p{L}\\p{N}])${escape(name)}(?![\\p{L}\\p{N}])`, 'gu');
    const words = name.toLowerCase().split(/\s+/).map(escape);
    const last = words.pop();
    const plural = /y$/.test(last) ? `(?:${last}|${last.slice(0, -1)}ies)` : `${last}(?:s|es)?`;
    const body = [...words, plural].join('\\s+').replace(/'/g, "['’]");
    return new RegExp(`(?<!${EDGE})${body}(?!${EDGE})`, 'giu');
  }

  // Russian and Uzbek words change their endings, so a translated name matches by its stem.
  function stemPattern(name, lang) {
    return name.toLowerCase().split(/\s+/).map((word) => {
      if (word.length < 4) return word;
      if (lang === 'ru') return `${word.slice(0, word.length >= 6 ? -2 : -1)}*`;
      return `${word}*`;
    }).join(' ');
  }

  function buildIndex(course, chapters, terms) {
    const { TERMS, toRegex } = terms;
    const entries = [];
    for (const group of course) {
      for (const meta of group.chapters) {
        const chapter = chapters[meta.id];
        if (!chapter) continue;
        chapter.glossary.forEach((g, i) => {
          const enNames = names(g.term.en);
          const known = TERMS.find((t) => t.en.some((p) => enNames.some((n) => p.replace(/\*/g, '').toLowerCase() === n.toLowerCase())));
          const translated = (lang) => {
            if (known) return known[lang].filter((p) => !p.startsWith('?')).map(toRegex);
            return names(g.term[lang]).map((n) => toRegex(stemPattern(n, lang)));
          };
          entries.push({
            key: `${meta.number}:${i}`,
            name: g.term.en.toLowerCase(),
            chapter: meta.number,
            chapterTitle: meta.title,
            term: g.term,
            definition: g.definition,
            example: g.example,
            patterns: { en: enNames.map(englishRegex), ru: translated('ru'), uz: translated('uz') },
          });
        });
      }
    }
    return entries;
  }

  // One entry per term: this chapter's own definition if it has one, otherwise the earliest.
  function candidatesFor(entries, chapter) {
    const chosen = new Map();
    for (const entry of entries) {
      if (entry.chapter > chapter) continue;
      const held = chosen.get(entry.name);
      if (!held || entry.chapter === chapter) chosen.set(entry.name, entry);
    }
    return [...chosen.values()];
  }

  function firstHit(text, patterns) {
    let best = null;
    for (const re of patterns) {
      re.lastIndex = 0;
      const m = re.exec(text);
      if (m && (!best || m.index < best.start || (m.index === best.start && m[0].length > best.end - best.start))) {
        best = { start: m.index, end: m.index + m[0].length };
      }
    }
    return best;
  }

  // Splits text into plain parts and { text, entry } parts, linking each term once per `seen`.
  // A translated word can carry several meanings, so it is linked only when the English
  // version of the same text uses the term.
  function segment(text, lang, candidates, seen, enText) {
    const hits = [];
    for (const entry of candidates) {
      if (seen.has(`g:${entry.name}`)) continue;
      const enHit = lang !== 'en' && enText !== undefined ? firstHit(enText, entry.patterns.en) : null;
      if (lang !== 'en' && enText !== undefined && !enHit) continue;
      const hit = firstHit(text, entry.patterns[lang] ?? entry.patterns.en);
      if (hit) hits.push({ ...hit, entry, enLength: enHit ? enHit.end - enHit.start : 0 });
    }
    hits.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start) || b.enLength - a.enLength);
    const kept = [];
    for (const hit of hits) if (!kept.some((k) => hit.start < k.end && hit.end > k.start)) kept.push(hit);
    const parts = [];
    let at = 0;
    for (const hit of kept) {
      seen.add(`g:${hit.entry.name}`);
      if (hit.start > at) parts.push({ text: text.slice(at, hit.start) });
      parts.push({ text: text.slice(hit.start, hit.end), entry: hit.entry });
      at = hit.end;
    }
    if (at < text.length) parts.push({ text: text.slice(at) });
    return parts;
  }

  function findByLabel(candidates, label) {
    return candidates.find((entry) => entry.patterns.en.some((re) => {
      re.lastIndex = 0;
      const m = re.exec(label);
      return m && m.index === 0 && m[0].length === label.length;
    }));
  }

  const core = { buildIndex, candidatesFor, segment, findByLabel, names };
  if (typeof module !== 'undefined') {
    module.exports = core;
    return;
  }

  // ---- Browser side ----
  let entries = null;
  let chapter = Infinity;
  const cache = new Map();

  function all() {
    entries ??= buildIndex(ACCA.course, ACCA.chapters, ACCA.terms);
    return entries;
  }

  function candidates() {
    if (!cache.has(chapter)) cache.set(chapter, candidatesFor(all(), chapter));
    return cache.get(chapter);
  }

  function setChapter(number) {
    chapter = Number.isFinite(number) ? number : Infinity;
  }

  function chapterOf(topicId) {
    const n = Number(String(topicId ?? '').replace('chapter-', ''));
    return Number.isFinite(n) && n > 0 ? n : Infinity;
  }

  let card = null;
  let returnFocus = null;

  function closeCard() {
    if (!card) return;
    card.remove();
    card = null;
    document.removeEventListener('keydown', onKey);
    document.removeEventListener('pointerdown', onOutside, true);
    returnFocus?.focus?.({ preventScroll: true });
    returnFocus = null;
  }

  function onKey(event) {
    if (event.key === 'Escape') closeCard();
  }

  function onOutside(event) {
    if (card && !card.contains(event.target) && !event.target.closest?.('.term-link')) closeCard();
  }

  function openCard(entry, lang) {
    const { el } = ACCA.dom;
    const { label, translate: t } = ACCA.i18n;
    closeCard();
    returnFocus = document.activeElement;
    const translated = t(entry.term, lang);
    const showEnglish = lang !== 'en' && !translated.toLowerCase().includes(entry.term.en.toLowerCase());
    card = el('div', { class: 'term-card', role: 'dialog', 'aria-labelledby': 'term-card-title', tabindex: '-1' },
      el('div', { class: 'term-card-top' },
        el('p', { class: 'term-card-from' }, `${label('chapter', lang)} ${entry.chapter} · ${t(entry.chapterTitle, lang)}`),
        el('button', { type: 'button', class: 'term-card-close', 'aria-label': label('close', lang), onclick: closeCard }, '×')),
      el('h2', { id: 'term-card-title' }, translated, showEnglish && el('small', { class: 'en-chip', lang: 'en' }, entry.term.en)),
      el('p', {}, t(entry.definition, lang)),
      entry.example && el('div', { class: 'term-example' },
        el('p', { class: 'example-label' }, label('forExample', lang)),
        el('p', {}, t(entry.example, lang))),
      el('a', { class: 'term-card-link', href: `#/chapter/${entry.chapter}`, onclick: closeCard }, `${label('openChapter', lang)} ${entry.chapter}`));
    document.body.append(card);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside, true);
    card.focus({ preventScroll: true });
  }

  function button(entry, lang, content) {
    const { el } = ACCA.dom;
    return el('button', {
      type: 'button', class: 'term-link', 'aria-haspopup': 'dialog',
      onclick: (event) => { event.preventDefault(); event.stopPropagation(); openCard(entry, lang); },
    }, content);
  }

  function link(text, lang, seen = new Set(), enText = undefined) {
    if (!text) return [text];
    return segment(text, lang, candidates(), seen, enText).map((part) => (part.entry ? button(part.entry, lang, part.text) : part.text));
  }

  function byLabel(label, seen = new Set()) {
    const entry = findByLabel(candidates(), label);
    if (!entry || seen.has(`g:${entry.name}`)) return null;
    seen.add(`g:${entry.name}`);
    return entry;
  }

  (globalThis.ACCA ??= {}).glossary = { link, byLabel, button, openCard, closeCard, setChapter, chapterOf, all };
})();
