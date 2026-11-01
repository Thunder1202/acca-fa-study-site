'use strict';

(function () {
  const { parseRoute, onHashChange } = ACCA.router;
  const { getLang, setLang, label } = ACCA.i18n;
  const { renderHome } = ACCA.homeView;
  const { renderChapter } = ACCA.chapterView;
  const { renderQuiz, resetQuiz } = ACCA.quizView;
  const { renderPractice, renderWeakAreas } = ACCA.practiceView;
  const { el } = ACCA.dom;
  const { loadProgress } = ACCA.progress;
  const { course, chapters, questions } = ACCA;

  const app = document.getElementById('app');
  const switcher = document.getElementById('lang-switcher');

  function memoryStorage() {
    const data = {};
    return { getItem: (key) => data[key] ?? null, setItem: (key, value) => { data[key] = value; } };
  }

  function openStorage() {
    try {
      return window.localStorage ?? memoryStorage();
    } catch {
      return memoryStorage();
    }
  }

  const storage = openStorage();
  const allChapters = course.flatMap((group) => group.chapters);
  const openChapters = allChapters.filter((chapter) => chapters[chapter.id]);
  const topics = openChapters.map((chapter) => ({ ...chapter, questionCount: questions[chapter.id].length }));

  function renderNotFound(lang) {
    app.replaceChildren(el('div', { class: 'page' },
      el('h1', {}, label('notFound', lang)),
      el('a', { class: 'button primary', href: '#/' }, label('goHome', lang))));
  }

  function showChapter(number, lang) {
    const position = openChapters.findIndex((chapter) => String(chapter.number) === number);
    if (position === -1) return renderNotFound(lang);
    const entry = openChapters[position];
    return renderChapter(app, chapters[entry.id], {
      number: entry.number,
      previous: openChapters[position - 1],
      next: openChapters[position + 1],
      questionCount: questions[entry.id].length,
    }, lang);
  }

  function showQuiz(topicId, lang) {
    if (topicId === 'review') {
      const progress = loadProgress(storage);
      const studied = topics.filter((topic) => progress[topic.id]);
      if (studied.length === 0) return renderNotFound(lang);
      return renderQuiz(app, {
        key: 'review', questions: studied.flatMap((topic) => questions[topic.id]), storage,
        title: label('studiedTitle', lang), backHref: '#/practice', backLabel: 'backToPractice',
      }, lang);
    }
    const topic = topics.find((item) => item.id === topicId);
    if (!topic) return renderNotFound(lang);
    return renderQuiz(app, {
      key: topicId, questions: questions[topicId], storage,
      title: ACCA.i18n.translate(topic.title, lang), backHref: `#/chapter/${topic.number}`, backLabel: 'backToLesson',
    }, lang);
  }

  function renderChrome(lang) {
    document.documentElement.lang = lang;
    switcher.value = lang;
    for (const node of document.querySelectorAll('[data-label]')) node.textContent = label(node.dataset.label, lang);
    const current = window.location.hash || '#/';
    for (const link of document.querySelectorAll('.site-nav a')) {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
  }

  function render() {
    const lang = getLang(storage);
    const { view, params } = parseRoute(window.location.hash);
    renderChrome(lang);
    if (view === 'chapter') showChapter(params.id, lang);
    else if (view === 'quiz') showQuiz(params.topicId, lang);
    else if (view === 'practice') renderPractice(app, topics, storage, lang);
    else if (view === 'weak-areas') renderWeakAreas(app, topics, storage, lang);
    else renderHome(app, course, chapters, storage, lang);
  }

  switcher.addEventListener('change', () => {
    setLang(storage, switcher.value);
    render();
  });

  onHashChange(() => {
    resetQuiz();
    render();
    window.scrollTo(0, 0);
  });

  render();
})();
