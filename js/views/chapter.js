'use strict';

(function () {
  const { el, richText } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;

  function chapterLink(chapter, lang, text, className) {
    return el('a', { href: `#/chapter/${chapter.number}`, class: className }, text, el('span', { class: 'link-title' }, t(chapter.title, lang)));
  }

  function renderChapter(container, chapter, meta, lang) {
    const { number, previous, next, questionCount } = meta;
    container.replaceChildren(
      el('article', { class: 'lesson' },
        el('header', { class: 'lesson-head' },
          el('p', { class: 'eyebrow' }, `${label('chapter', lang)} ${number}`),
          el('h1', {}, t(chapter.titles, lang))),
        el('details', { class: 'more objectives' },
          el('summary', {}, label('objectives', lang)),
          el('ul', {}, chapter.objectives.map((o) => el('li', {}, t(o, lang))))),
        chapter.sections.map((section) => el('section', { class: 'lesson-section' },
          el('h2', {}, t(section.heading, lang)),
          el('div', { class: 'key-points' }, richText(t(section.key, lang))),
          el('aside', { class: 'example' },
            el('p', { class: 'example-label' }, label('example', lang)),
            richText(t(section.example, lang))),
          el('details', { class: 'more' },
            el('summary', {}, label('explainMore', lang)),
            richText(t(section.body, lang))))),
        el('section', { class: 'glossary' },
          el('h2', {}, label('glossary', lang)),
          el('dl', {}, chapter.glossary.map((g) => el('div', { class: 'term' },
            el('dt', {}, t(g.term, lang)),
            el('dd', {}, t(g.definition, lang)))))),
        el('div', { class: 'lesson-practice' },
          el('a', { class: 'button primary', href: `#/quiz/${chapter.id}` }, `${label('practiseTopic', lang)} (${questionCount})`)),
        el('nav', { class: 'chapter-nav' },
          previous ? chapterLink(previous, lang, label('previousChapter', lang), 'chapter-link') : el('span'),
          next ? chapterLink(next, lang, label('nextChapter', lang), 'chapter-link forward') : el('span'))));
  }

  ACCA.chapterView = { renderChapter };
})();
