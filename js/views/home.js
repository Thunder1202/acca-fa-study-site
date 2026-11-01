'use strict';

(function () {
  const { el } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;
  const { loadProgress } = ACCA.progress;

  function chapterRow(chapter, available, entry, lang) {
    const status = !available
      ? label('comingSoon', lang)
      : entry ? `${label('lastScore', lang)}: ${Math.round(entry.lastScore * 100)}%` : label('notStarted', lang);
    const content = [
      el('span', { class: 'chapter-number' }, String(chapter.number)),
      el('span', { class: 'chapter-title' }, t(chapter.title, lang)),
      el('span', { class: 'chapter-status' }, status),
    ];
    return el('li', {}, available
      ? el('a', { class: 'chapter-row', href: `#/chapter/${chapter.number}` }, content)
      : el('div', { class: 'chapter-row is-locked' }, content));
  }

  function renderHome(container, course, chapters, storage, lang) {
    const progress = loadProgress(storage);
    const open = course.flatMap((group) => group.chapters).filter((chapter) => chapters[chapter.id]);
    const nextUp = open.find((chapter) => !progress[chapter.id]);
    container.replaceChildren(el('div', { class: 'page home' },
      el('section', { class: 'hero' },
        el('p', { class: 'eyebrow' }, label('heroEyebrow', lang)),
        el('h1', {}, label('heroTitle', lang)),
        el('p', { class: 'hero-text' }, label('heroText', lang)),
        el('a', { class: 'button primary', href: `#/chapter/${(nextUp ?? open[0]).number}` },
          nextUp && nextUp !== open[0] ? `${label('continueWith', lang)}: ${t(nextUp.title, lang)}` : label('startHere', lang))),
      course.map((group, i) => el('section', { class: 'group' },
        el('h2', {}, el('span', { class: 'group-number' }, `${label('group', lang)} ${i + 1}`), t(group.title, lang)),
        el('ol', { class: 'chapter-list' }, group.chapters.map((chapter) => chapterRow(chapter, Boolean(chapters[chapter.id]), progress[chapter.id], lang)))))));
  }

  ACCA.homeView = { renderHome };
})();
