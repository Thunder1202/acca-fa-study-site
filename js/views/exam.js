'use strict';

(function () {
  const { el } = ACCA.dom;
  const { label, translate: t } = ACCA.i18n;
  const { buildPaper, paperFromIds, EXAM } = ACCA.exam;
  const { renderQuiz } = ACCA.quizView;
  const PAPER_KEY = 'acca-fa-exam';
  let memoryPaper = null;

  function loadPaper(storage) {
    try {
      const saved = JSON.parse(storage.getItem(PAPER_KEY));
      if (saved && Array.isArray(saved.ids) && Number.isFinite(saved.startedAt)) return saved;
    } catch {
      // Fall through to the copy kept in memory.
    }
    return memoryPaper;
  }

  function savePaper(storage, paper) {
    memoryPaper = paper;
    try {
      storage.setItem(PAPER_KEY, JSON.stringify(paper));
    } catch {
      // The paper still works until the page is closed.
    }
  }

  function startNew(ctx) {
    const paper = buildPaper(ACCA.questions, ACCA.sectionB);
    savePaper(ctx.storage, { ids: paper.ids, startedAt: Date.now() });
    window.location.hash = '#/exam/paper';
  }

  function fact(value, text) {
    return el('div', { class: 'fact' }, el('span', { class: 'fact-value' }, value), el('span', { class: 'fact-text' }, text));
  }

  function renderExamStart(container, ctx, lang) {
    const saved = loadPaper(ctx.storage);
    const inProgress = saved && !saved.finished && Date.now() < saved.startedAt + EXAM.minutes * 60000;
    container.replaceChildren(el('div', { class: 'page exam-start' },
      el('p', { class: 'eyebrow' }, label('heroEyebrow', lang)),
      el('h1', {}, label('examTitle', lang)),
      el('div', { class: 'facts' },
        fact('35', `× 2 ${label('marks', lang)}`),
        fact('2', `× 15 ${label('marks', lang)}`),
        fact('2:00', label('timeAllowed', lang)),
        fact('50%', label('bandPass', lang).toLowerCase())),
      el('p', { class: 'lead' }, label('examText', lang)),
      el('p', { class: 'hint' }, label('examRules', lang)),
      el('div', { class: 'actions' },
        inProgress && el('a', { class: 'button primary', href: '#/exam/paper' }, label('examContinue', lang)),
        el('button', { type: 'button', class: `button${inProgress ? '' : ' primary'}`, onclick: () => startNew(ctx) }, label(inProgress ? 'examNew' : 'examStart', lang)),
        saved?.finished && el('a', { class: 'button', href: '#/exam/paper' }, label('resultTitle', lang)))));
  }

  function renderExamPaper(container, ctx, lang) {
    const saved = loadPaper(ctx.storage);
    if (!saved) return renderExamStart(container, ctx, lang);
    const paper = paperFromIds(saved.ids, ACCA.questions, ACCA.sectionB);
    const titles = Object.fromEntries(ctx.topics.map((topic) => [topic.id, `${topic.number}. ${t(topic.title, lang)}`]));
    return renderQuiz(container, {
      key: `exam-${saved.startedAt}`,
      questions: paper.questions,
      storage: ctx.storage,
      title: label('examTitle', lang),
      backHref: '#/exam',
      backLabel: 'backToExam',
      fixedMode: 'all',
      topicTitle: (id) => titles[id] ?? id,
      exam: {
        endsAt: saved.startedAt + EXAM.minutes * 60000,
        finishedAnswers: saved.finished ? saved.answers : null,
        timedOut: Boolean(saved.timedOut),
        onFinish: (answers, timedOut) => savePaper(ctx.storage, { ...saved, finished: true, answers, timedOut }),
      },
    }, lang);
  }

  ACCA.examView = { renderExamStart, renderExamPaper };
})();
