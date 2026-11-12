'use strict';

(function () {
  const { el } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;
  const { loadProgress, getWeakestFirst } = ACCA.progress;
  const AREA_LABEL = { statements: 'areaStatements', cashflows: 'areaCashflows', groups: 'areaGroups' };

  function scoreMeter(entry, lang) {
    if (!entry) return el('span', { class: 'status-text' }, label('notStarted', lang));
    const percent = Math.round(entry.lastScore * 100);
    return el('span', { class: `status-text${percent >= 50 ? ' is-pass' : ' is-below'}` },
      el('span', { class: 'meter', style: `--pct:${percent}%`, 'aria-hidden': 'true' }),
      `${label('lastScore', lang)}: ${percent}%`);
  }

  function topicRow(topic, entry, lang) {
    return el('li', {},
      el('a', { class: 'topic-row', href: `#/quiz/${topic.id}` },
        el('span', { class: 'topic-number' }, String(topic.number)),
        el('span', { class: 'topic-main' },
          el('span', { class: 'topic-title' }, t(topic.title, lang)),
          el('span', { class: 'hint' }, `${topic.questionCount} ${label('questionsCount', lang)}`)),
        scoreMeter(entry, lang)));
  }

  function caseRow(item, entry, lang) {
    return el('li', {},
      el('a', { class: 'case-row', href: `#/quiz/${item.id}` },
        el('span', { class: 'case-area' }, label(AREA_LABEL[item.area], lang)),
        el('span', { class: 'case-title' }, item.title),
        el('span', { class: 'hint' }, `${item.tasks.length} ${label('tasksCount', lang)} · 15 ${label('marks', lang)}`)));
  }

  function bppRow(topic, count, entry, lang) {
    return el('li', {},
      el('a', { class: 'topic-row', href: `#/quiz/bpp-${topic.id}` },
        el('span', { class: 'topic-number' }, String(topic.number)),
        el('span', { class: 'topic-main' },
          el('span', { class: 'topic-title' }, t(topic.title, lang)),
          el('span', { class: 'hint' }, `${count} ${label('questionsCount', lang)} · BPP Kit`)),
        scoreMeter(entry, lang)));
  }

  function renderPractice(container, topics, storage, lang, cases, bpp = {}, bppCases = []) {
    const bppTopics = topics.filter((topic) => bpp[topic.id]?.length);
    const progress = loadProgress(storage);
    const studied = topics.filter((topic) => progress[topic.id]);
    container.replaceChildren(el('div', { class: 'page practice' },
      el('h1', {}, label('practiceTitle', lang)),
      el('div', { class: 'tiles' },
        el('a', { class: 'tile tile-exam', href: '#/exam' },
          el('span', { class: 'tile-title' }, label('mockExam', lang)),
          el('span', { class: 'tile-text' }, '35 + 2 · 100 ' + label('marks', lang) + ' · 2:00')),
        el('a', { class: 'tile', href: '#/weak-areas' },
          el('span', { class: 'tile-title' }, label('weakTitle', lang)),
          el('span', { class: 'tile-text' }, label('weakText', lang))),
        studied.length > 0
          ? el('a', { class: 'tile', href: '#/quiz/review' },
            el('span', { class: 'tile-title' }, label('studiedTitle', lang)),
            el('span', { class: 'tile-text' }, label('studiedText', lang)))
          : el('div', { class: 'tile is-empty' },
            el('span', { class: 'tile-title' }, label('studiedTitle', lang)),
            el('span', { class: 'tile-text' }, label('studiedEmpty', lang)))),
      el('section', { class: 'panel' },
        el('h2', {}, label('casesTitle', lang)),
        el('p', { class: 'hint' }, label('casesText', lang)),
        el('ul', { class: 'case-list' }, cases.map((item) => caseRow(item, progress[item.id], lang)))),
      el('section', { class: 'panel' },
        el('h2', {}, label('chooseTitle', lang)),
        el('ul', { class: 'topic-list' }, topics.map((topic) => topicRow(topic, progress[topic.id], lang)))),
      bppTopics.length > 0 && el('section', { class: 'panel' },
        el('h2', {}, label('bppSetsTitle', lang)),
        el('p', { class: 'hint' }, label('bppNote', lang)),
        el('ul', { class: 'topic-list' }, bppTopics.map((topic) => bppRow(topic, bpp[topic.id].length, progress[`bpp-${topic.id}`], lang)))),
      bppCases.length > 0 && el('section', { class: 'panel' },
        el('h2', {}, label('bppCasesTitle', lang)),
        el('p', { class: 'hint' }, label('bppNote', lang)),
        el('ul', { class: 'case-list' }, bppCases.map((item) => caseRow(item, progress[item.id], lang))))));
  }

  function renderWeakAreas(container, topics, storage, lang) {
    const progress = loadProgress(storage);
    const order = getWeakestFirst(storage, topics.map((topic) => topic.id));
    container.replaceChildren(el('div', { class: 'page' },
      el('h1', {}, label('weakTitle', lang)),
      el('p', { class: 'lead' }, label('weakText', lang)),
      el('ul', { class: 'topic-list' }, order.map((id) => topicRow(topics.find((topic) => topic.id === id), progress[id], lang)))));
  }

  ACCA.practiceView = { renderPractice, renderWeakAreas };
})();
