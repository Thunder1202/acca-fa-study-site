'use strict';

(function () {
  const quizApi = typeof module !== 'undefined' ? require('./quiz.js') : globalThis.ACCA.quiz;
  const EXAM = { sectionA: 35, sectionAMarks: 2, minutes: 120, passPercent: 50 };

  function caseQuestions(item) {
    const info = { id: item.id, title: item.title, intro: item.intro, table: item.table, area: item.area, kitRef: item.kitRef, bppRef: item.bppRef, bppPage: item.bppPage };
    return item.tasks.map(({ topic, ...task }, i) => ({ ...task, id: `${item.id}-t${i + 1}`, topicId: topic, case: info, taskNumber: i + 1, taskCount: item.tasks.length }));
  }

  // Largest-remainder method, so the shares always add up to the total.
  function apportion(counts, total) {
    const sum = Object.values(counts).reduce((a, b) => a + b, 0);
    const exact = Object.entries(counts).map(([key, n]) => ({ key, n: (n / sum) * total }));
    const shares = Object.fromEntries(exact.map(({ key, n }) => [key, Math.floor(n)]));
    let left = total - Object.values(shares).reduce((a, b) => a + b, 0);
    for (const { key } of [...exact].sort((a, b) => (b.n % 1) - (a.n % 1))) {
      if (left === 0) break;
      shares[key] += 1;
      left -= 1;
    }
    return shares;
  }

  function shuffled(list, random) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const sectionAQuestion = (q) => ({ ...q, marks: EXAM.sectionAMarks });

  function buildPaper(bank, cases, random = Math.random) {
    const shares = apportion(Object.fromEntries(Object.entries(bank).map(([topic, list]) => [topic, list.length])), EXAM.sectionA);
    const sectionA = shuffled(Object.entries(bank).flatMap(([topic, list]) => shuffled(list, random).slice(0, shares[topic])), random).map(sectionAQuestion);
    const single = cases.filter((c) => c.area !== 'groups');
    const groups = cases.filter((c) => c.area === 'groups');
    const chosen = [single[Math.floor(random() * single.length)], groups[Math.floor(random() * groups.length)]];
    const questions = [...sectionA, ...chosen.flatMap(caseQuestions)];
    return { ids: questions.map((q) => q.id), questions };
  }

  function paperFromIds(ids, bank, cases) {
    const all = new Map([
      ...Object.values(bank).flat().map((q) => [q.id, sectionAQuestion(q)]),
      ...cases.flatMap(caseQuestions).map((q) => [q.id, q]),
    ]);
    const questions = ids.filter((id) => all.has(id)).map((id) => all.get(id));
    return { ids: questions.map((q) => q.id), questions };
  }

  function scoreMarks(session) {
    let marks = 0;
    let total = 0;
    for (const q of session.questions) {
      const worth = q.marks ?? EXAM.sectionAMarks;
      total += worth;
      if (session.answers.has(q.id) && quizApi.isCorrect(session, q.id)) marks += worth;
    }
    return { marks, total };
  }

  function formatClock(ms) {
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  const api = { EXAM, caseQuestions, apportion, buildPaper, paperFromIds, scoreMarks, formatClock };
  if (typeof module !== 'undefined') module.exports = api;
  else globalThis.ACCA.exam = api;
})();
