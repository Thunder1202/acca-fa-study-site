'use strict';

(function () {
  const { el } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;
  const { loadProgress, getWeakestFirst } = ACCA.progress;

  function scoreText(entry, lang) {
    return entry ? `${label('lastScore', lang)}: ${Math.round(entry.lastScore * 100)}%` : label('notStarted', lang);
  }

  function topicRow(topic, entry, lang) {
    return el('li', { class: 'topic-row' },
      el('div', {},
        el('p', { class: 'topic-title' }, `${topic.number}. ${t(topic.title, lang)}`),
        el('p', { class: 'hint' }, `${scoreText(entry, lang)} · ${topic.questionCount} ${label('questionsCount', lang)}`)),
      el('a', { class: 'button', href: `#/quiz/${topic.id}` }, label('start', lang)));
  }

  function renderPractice(container, topics, storage, lang) {
    const progress = loadProgress(storage);
    const studied = topics.filter((topic) => progress[topic.id]);
    container.replaceChildren(el('div', { class: 'page' },
      el('h1', {}, label('practiceTitle', lang)),
      el('section', { class: 'panel' },
        el('h2', {}, label('studiedTitle', lang)),
        el('p', {}, label(studied.length ? 'studiedText' : 'studiedEmpty', lang)),
        studied.length > 0 && el('a', { class: 'button primary', href: '#/quiz/review' }, label('start', lang))),
      el('section', { class: 'panel' },
        el('h2', {}, label('weakTitle', lang)),
        el('p', {}, label('weakText', lang)),
        el('a', { class: 'button', href: '#/weak-areas' }, label('weakAreas', lang))),
      el('section', { class: 'panel' },
        el('h2', {}, label('chooseTitle', lang)),
        el('p', {}, label('chooseText', lang)),
        el('ul', { class: 'topic-list' }, topics.map((topic) => topicRow(topic, progress[topic.id], lang))))));
  }

  function renderWeakAreas(container, topics, storage, lang) {
    const progress = loadProgress(storage);
    const order = getWeakestFirst(storage, topics.map((topic) => topic.id));
    container.replaceChildren(el('div', { class: 'page' },
      el('h1', {}, label('weakTitle', lang)),
      el('p', {}, label('weakText', lang)),
      el('ul', { class: 'topic-list' }, order.map((id) => topicRow(topics.find((topic) => topic.id === id), progress[id], lang)))));
  }

  ACCA.practiceView = { renderPractice, renderWeakAreas };
})();
