'use strict';

(function () {
  const { parseRoute, onHashChange } = ACCA.router;
  const { getLang, setLang, label } = ACCA.i18n;
  const { renderHome } = ACCA.homeView;
  const { renderChapter } = ACCA.chapterView;
  const { renderQuiz, resetQuiz } = ACCA.quizView;
  const { renderPractice, renderWeakAreas } = ACCA.practiceView;
  const { renderExamStart, renderExamPaper } = ACCA.examView;
  const { renderTerms } = ACCA.termsView;
  const { caseQuestions } = ACCA.exam;
  const { getTheme, getMode, setMode, nextMode } = ACCA.theme;
  const { el } = ACCA.dom;
  const { loadProgress } = ACCA.progress;
  const { course, chapters, questions, sectionB } = ACCA;
  const bpp = ACCA.bpp ?? {};

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
  let lang = getLang(storage);
  const theme = getTheme(storage);
  let mode = getMode(storage, window.matchMedia('(prefers-color-scheme: dark)').matches);
  const modeToggle = document.getElementById('mode-toggle');
  const allChapters = course.flatMap((group) => group.chapters);
  const openChapters = allChapters.filter((chapter) => chapters[chapter.id]);
  const topics = openChapters.map((chapter) => ({ ...chapter, questionCount: questions[chapter.id].length }));

  function renderNotFound(lang) {
    app.replaceChildren(el('div', { class: 'page' },
      el('h1', {}, label('notFound', lang)),
      el('a', { class: 'button primary', href: '#/' }, label('goHome', lang))));
  }

  const kitRangeFor = (topicId) => ACCA.quiz.kitRange(questions[topicId].map((q) => q.kitRef));

  function showChapter(number, section, lang) {
    const position = openChapters.findIndex((chapter) => String(chapter.number) === number);
    if (position === -1) return renderNotFound(lang);
    const entry = openChapters[position];
    return renderChapter(app, chapters[entry.id], {
      number: entry.number,
      previous: openChapters[position - 1],
      next: openChapters[position + 1],
      questionCount: questions[entry.id].length,
      bppCount: bpp[entry.id]?.length ?? 0,
      kitRange: kitRangeFor(entry.id),
      section,
    }, lang);
  }

  function showCase(item, lang) {
    return renderQuiz(app, {
      key: item.id, questions: caseQuestions(item), storage,
      title: `${label('casesTitle', lang)}: ${item.title}`, backHref: '#/practice', backLabel: 'backToPractice',
    }, lang);
  }

  function showQuiz(topicId, lang) {
    const item = sectionB.find((c) => c.id === topicId);
    if (item) return showCase(item, lang);
    if (topicId.startsWith('bpp-')) {
      const chapterId = topicId.slice(4);
      const chapter = topics.find((t) => t.id === chapterId);
      if (!chapter || !bpp[chapterId]) return renderNotFound(lang);
      return renderQuiz(app, {
        key: topicId, progressKey: topicId, questions: bpp[chapterId], storage,
        title: `${ACCA.i18n.translate(chapter.title, lang)} · BPP Kit`, backHref: `#/chapter/${chapter.number}`, backLabel: 'backToLesson',
        subtitle: label('bppNote', lang),
      }, lang);
    }
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
      subtitle: `${label('kitQuestions', lang)}: ${kitRangeFor(topicId)}`,
    }, lang);
  }

  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.mode = mode;
    const text = label(mode === 'dark' ? 'switchToLight' : 'switchToDark', lang);
    modeToggle.setAttribute('aria-label', text);
    modeToggle.title = text;
  }

  function renderChrome(lang) {
    applyTheme();
    document.documentElement.lang = lang;
    switcher.value = lang;
    for (const node of document.querySelectorAll('[data-label]')) node.textContent = label(node.dataset.label, lang);
    const current = (window.location.hash || '#/').replace(/^(#\/exam).*/, '$1');
    for (const link of document.querySelectorAll('.site-nav a')) {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
  }

  function render() {
    const { view, params } = parseRoute(window.location.hash);
    renderChrome(lang);
    ACCA.glossary.setChapter(Infinity);
    ACCA.glossary.closeCard();
    ACCA.helper.setLang(lang);
    if (view === 'chapter') showChapter(params.id, params.section, lang);
    else if (view === 'quiz') showQuiz(params.topicId, lang);
    else if (view === 'practice') renderPractice(app, topics, storage, lang, sectionB, bpp);
    else if (view === 'exam') (params.step === 'paper' ? renderExamPaper : renderExamStart)(app, { storage, topics }, lang);
    else if (view === 'terms') renderTerms(app, lang);
    else if (view === 'weak-areas') renderWeakAreas(app, topics, storage, lang);
    else renderHome(app, course, chapters, storage, lang);
  }

  modeToggle.addEventListener('click', () => {
    mode = nextMode(mode);
    setMode(storage, mode);
    applyTheme();
  });

  switcher.addEventListener('change', () => {
    lang = switcher.value;
    setLang(storage, lang);
    render();
  });

  onHashChange(() => {
    resetQuiz();
    render();
    window.scrollTo(0, 0);
  });

  render();
})();
