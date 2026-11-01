'use strict';

(function () {
  const { el, richText } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;

  // A short "Term: meaning" bullet leads with the term so the page can be scanned.
  function keyPoint(line) {
    const text = line.replace(/^- /, '');
    const colon = text.indexOf(':');
    if (colon < 1 || colon > 44) return el('li', {}, text);
    return el('li', {}, el('strong', {}, text.slice(0, colon + 1)), text.slice(colon + 1));
  }

  function chapterLink(chapter, lang, text, className) {
    return el('a', { href: `#/chapter/${chapter.number}`, class: className }, text, el('span', { class: 'link-title' }, t(chapter.title, lang)));
  }

  function jumpTo(id) {
    document.getElementById(id).scrollIntoView();
  }

  function renderChapter(container, chapter, meta, lang) {
    const { number, previous, next, questionCount } = meta;
    const startTraining = () => el('a', { class: 'button primary', href: `#/quiz/${chapter.id}` }, `${label('practiseTopic', lang)} (${questionCount})`);
    container.replaceChildren(
      el('article', { class: 'lesson' },
        el('header', { class: 'lesson-head' },
          el('div', { class: 'frame' },
            el('span', { class: 'mission-mark', 'aria-hidden': 'true' }, String(number)),
            el('h1', {}, `${label('chapter', lang)} ${number}: ${t(chapter.titles, lang)}`))),
        el('div', { class: 'frame lesson-layout' },
          el('aside', { class: 'lesson-rail' },
            el('nav', { 'aria-label': t(chapter.titles, lang) },
              chapter.sections.map((section, i) => el('button', { type: 'button', class: 'rail-link', onclick: () => jumpTo(`section-${i}`) }, t(section.heading, lang)))),
            startTraining()),
          el('div', { class: 'lesson-body' },
            el('details', { class: 'more' },
              el('summary', {}, label('objectives', lang)),
              el('ul', {}, chapter.objectives.map((o) => el('li', {}, t(o, lang))))),
            chapter.sections.map((section, i) => el('section', { class: 'lesson-section', id: `section-${i}` },
              el('h2', {}, t(section.heading, lang)),
              el('ul', { class: 'key-points' }, t(section.key, lang).trim().split('\n').map(keyPoint)),
              el('aside', { class: 'example' },
                el('p', { class: 'example-label' }, label('example', lang)),
                richText(t(section.example, lang))),
              el('details', { class: 'more' },
                el('summary', {}, label('explainMore', lang)),
                section.exam && el('div', { class: 'exam-notes' },
                  el('h3', {}, label('examNotes', lang)),
                  richText(t(section.exam, lang))),
                richText(t(section.body, lang))))),
            el('section', { class: 'glossary' },
              el('h2', {}, label('glossary', lang)),
              el('dl', {}, chapter.glossary.map((g) => el('div', { class: 'term' },
                el('dt', {}, t(g.term, lang)),
                el('dd', {}, t(g.definition, lang)))))),
            el('div', { class: 'lesson-practice' }, startTraining()),
            el('nav', { class: 'chapter-nav' },
              previous ? chapterLink(previous, lang, label('previousChapter', lang), 'chapter-link') : el('span'),
              next ? chapterLink(next, lang, label('nextChapter', lang), 'chapter-link forward') : el('span'))))));
  }

  ACCA.chapterView = { renderChapter };
})();
