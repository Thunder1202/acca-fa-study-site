'use strict';

(function () {
  const { el, richTextT, termNodes } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;

  // A short "Term: meaning" bullet leads with the term so the page can be scanned.
  function keyPoint(line, enLine, lang, seen) {
    const text = line.replace(/^- /, '');
    const english = enLine.replace(/^- /, '');
    const colon = text.indexOf(':');
    if (colon < 1 || colon > 44) return el('li', {}, termNodes(text, english, lang, seen));
    return el('li', {}, el('strong', {}, text.slice(0, colon + 1)), termNodes(text.slice(colon + 1), english, lang, seen));
  }

  function keyPoints(section, lang, seen) {
    const english = section.key.en.trim().split('\n');
    return t(section.key, lang).trim().split('\n').map((line, n) => keyPoint(line, english[n] ?? section.key.en, lang, seen));
  }

  // In Russian and Uzbek the official English term is shown beside the translated one.
  function glossaryTerm(term, lang) {
    const translated = t(term, lang);
    const needsEnglish = lang !== 'en' && !translated.toLowerCase().includes(term.en.toLowerCase());
    return el('dt', {}, translated, needsEnglish && el('small', { class: 'en-chip', lang: 'en' }, term.en));
  }

  function glossary(chapter, lang) {
    return el('details', { class: 'glossary more', open: true },
      el('summary', {}, `${label('glossary', lang)} (${chapter.glossary.length})`),
      el('p', { class: 'hint' }, label('glossaryHint', lang)),
      el('dl', {}, chapter.glossary.map((g) => el('div', { class: 'term' },
        glossaryTerm(g.term, lang),
        el('dd', {}, t(g.definition, lang)),
        g.example && el('dd', { class: 'term-eg' }, el('span', { class: 'term-eg-label' }, `${label('forExample', lang)}: `), t(g.example, lang))))));
  }

  function chapterLink(chapter, lang, text, className) {
    return el('a', { href: `#/chapter/${chapter.number}`, class: className }, text, el('span', { class: 'link-title' }, t(chapter.title, lang)));
  }

  function jumpTo(id) {
    document.getElementById(id)?.scrollIntoView();
  }

  function lessonSection(chapter, section, i, lang) {
    const seen = new Set();
    return el('section', { class: 'lesson-section', id: `section-${i}` },
      el('h2', {}, t(section.heading, lang)),
      section.simple && el('div', { class: 'simple' },
        el('p', { class: 'simple-label' }, label('simpleWords', lang)),
        richTextT(section.simple, lang, seen)),
      el('ul', { class: 'key-points' }, keyPoints(section, lang, seen)),
      el('aside', { class: 'example' },
        el('p', { class: 'example-label' }, label('example', lang)),
        richTextT(section.example, lang, seen)),
      // Always open: every fact a practice question needs is either above or in these notes.
      section.exam && el('div', { class: 'exam-notes' },
        el('p', { class: 'exam-notes-label' }, label('examNotes', lang)),
        richTextT(section.exam, lang, seen)),
      el('details', { class: 'more' },
        el('summary', {}, label('explainMore', lang)),
        richTextT(section.body, lang, seen)),
      section.source && el('p', { class: 'source-note' }, `${label('sourceLabel', lang)}: ${t(section.source, lang)}`));
  }

  function renderChapter(container, chapter, meta, lang) {
    const { number, previous, next, questionCount, bppCount, kitRange, section } = meta;
    ACCA.glossary?.setChapter(number);
    const bppButton = () => bppCount > 0 && el('a', { class: 'button bpp', href: `#/quiz/bpp-${chapter.id}` }, `${label('bppPractice', lang)} (${bppCount})`);
    const startTraining = () => [el('a', { class: 'button primary', href: `#/quiz/${chapter.id}` }, `${label('practiseTopic', lang)} (${questionCount})`), bppButton()];
    const kitNote = () => el('p', { class: 'kit-range' }, `${label('kitQuestions', lang)}: ${kitRange}`);
    container.replaceChildren(
      el('article', { class: 'lesson' },
        el('header', { class: 'lesson-head' },
          el('div', { class: 'frame' },
            el('p', { class: 'eyebrow' }, `${label('chapter', lang)} ${number}`),
            el('h1', {}, t(chapter.titles, lang)),
            kitNote())),
        el('div', { class: 'frame lesson-layout' },
          el('aside', { class: 'lesson-rail' },
            el('nav', { 'aria-label': t(chapter.titles, lang) },
              el('button', { type: 'button', class: 'rail-link', onclick: () => jumpTo('key-terms') }, label('glossary', lang)),
              chapter.sections.map((s, i) => el('button', { type: 'button', class: 'rail-link', onclick: () => jumpTo(`section-${i}`) }, t(s.heading, lang)))),
            startTraining()),
          el('div', { class: 'lesson-body' },
            el('div', { id: 'key-terms' }, glossary(chapter, lang)),
            el('details', { class: 'more' },
              el('summary', {}, label('objectives', lang)),
              el('ul', {}, chapter.objectives.map((o) => el('li', {}, termNodes(t(o, lang), o.en, lang, new Set()))))),
            chapter.sections.map((s, i) => lessonSection(chapter, s, i, lang)),
            el('div', { class: 'lesson-practice' }, startTraining(), kitNote()),
            el('nav', { class: 'chapter-nav' },
              previous ? chapterLink(previous, lang, label('previousChapter', lang), 'chapter-link') : el('span'),
              next ? chapterLink(next, lang, label('nextChapter', lang), 'chapter-link forward') : el('span'))))));
    // After the router has scrolled to the top.
    if (section !== undefined) window.requestAnimationFrame(() => jumpTo(`section-${section}`));
  }

  ACCA.chapterView = { renderChapter };
})();
