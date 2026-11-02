'use strict';

(function () {
  const { el } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;
  const { loadProgress } = ACCA.progress;
  const { bandFor } = ACCA.quiz;

  function chapterRow(chapter, available, entry, lang) {
    const percent = entry ? Math.round(entry.lastScore * 100) : null;
    const status = !available
      ? label('comingSoon', lang)
      : entry ? `${label(bandFor(percent), lang)} · ${percent}%` : label('notStarted', lang);
    const content = [
      el('span', { class: 'chapter-number' }, String(chapter.number).padStart(2, '0')),
      el('span', { class: 'chapter-title' }, t(chapter.title, lang)),
      el('span', { class: `chapter-status${entry ? (percent >= 50 ? ' is-pass' : ' is-below') : ''}` },
        entry && el('span', { class: 'meter', style: `--pct:${percent}%`, 'aria-hidden': 'true' }),
        status),
    ];
    return el('li', {}, available
      ? el('a', { class: 'chapter-row', href: `#/chapter/${chapter.number}` }, content)
      : el('div', { class: 'chapter-row is-locked' }, content));
  }

  function stat(value, text) {
    return el('div', { class: 'stat' }, el('span', { class: 'stat-value' }, value), el('span', { class: 'stat-text' }, text));
  }

  function renderHome(container, course, chapters, storage, lang) {
    const progress = loadProgress(storage);
    const all = course.flatMap((group) => group.chapters);
    const open = all.filter((chapter) => chapters[chapter.id]);
    const done = open.filter((chapter) => progress[chapter.id]).length;
    const nextUp = open.find((chapter) => !progress[chapter.id]);
    const questionTotal = open.reduce((sum, chapter) => sum + (ACCA.questions[chapter.id]?.length ?? 0), 0);
    const target = nextUp ?? open[0];
    const resuming = done > 0 && nextUp;
    container.replaceChildren(el('div', { class: 'home' },
      el('section', { class: 'hero' },
        el('div', { class: 'hero-inner' },
          el('p', { class: 'eyebrow' }, label('heroEyebrow', lang)),
          el('h1', {}, label('heroTitle', lang)),
          el('p', { class: 'hero-text' }, label('heroText', lang)),
          el('div', { class: 'hero-actions' },
            el('a', { class: 'button primary', href: `#/chapter/${target.number}` },
              resuming ? `${label('continueWith', lang)}: ${label('chapter', lang)} ${target.number}` : label('startHere', lang)),
            el('a', { class: 'button', href: '#/exam' }, label('mockExam', lang))),
          el('div', { class: 'stats' },
            stat(String(open.length), label('statChapters', lang)),
            stat(String(questionTotal), label('statQuestions', lang)),
            stat(String(ACCA.sectionB.length), label('statCases', lang)),
            el('div', { class: 'stat stat-progress' },
              el('span', { class: 'stat-value' }, `${done}/${open.length}`),
              el('span', { class: 'stat-text' }, label('statDone', lang)),
              el('span', { class: 'meter', style: `--pct:${Math.round((done / open.length) * 100)}%`, 'aria-hidden': 'true' }))))),
      el('div', { class: 'path' }, course.map((group, i) => el('section', { class: 'group' },
        el('h2', {}, el('span', { class: 'group-index' }, `${label('group', lang)} ${i + 1}`), t(group.title, lang)),
        el('ol', { class: 'chapter-list' }, group.chapters.map((chapter) => chapterRow(chapter, Boolean(chapters[chapter.id]), progress[chapter.id], lang))))))));
  }

  ACCA.homeView = { renderHome };
})();
