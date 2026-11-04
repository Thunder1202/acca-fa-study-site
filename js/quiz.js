'use strict';

function startSession(questions) {
  return { questions, answers: new Map() };
}

function answer(session, questionId, selectedIndex) {
  const answers = new Map(session.answers);
  answers.set(questionId, selectedIndex);
  return { ...session, answers };
}

function answerKey(question) {
  if (question.type === 'multi') return [...question.correctIndices].sort();
  if (question.type === 'matrix') return question.rows.map((row) => row.correctIndex);
  return question.correctIndex;
}

function isCorrect(session, questionId) {
  const question = session.questions.find((q) => q.id === questionId);
  const given = session.answers.get(questionId);
  if (question.type === 'number') return Math.abs(given - question.correctValue) < 0.005;
  const normalised = question.type === 'multi' && Array.isArray(given) ? [...given].sort() : given;
  return JSON.stringify(normalised) === JSON.stringify(answerKey(question));
}

function score(session) {
  const answered = [...session.answers.keys()];
  return {
    attempted: answered.length,
    correct: answered.filter((id) => isCorrect(session, id)).length,
  };
}

function parseAmount(text) {
  const compact = text.replace(/[$\s ]/g, '').replace(/(%|:1|days?|times|x|дней|дня|день|раза?|kun|marta)$/i, '');
  const cleaned = /^[^,]*,\d{1,2}$/.test(compact) ? compact.replace(',', '.') : compact.replace(/,/g, '');
  if (cleaned === '') return undefined;
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : undefined;
}

function isComplete(question, given) {
  if (question.type === 'number') return Number.isFinite(given);
  if (question.type === 'multi') return Array.isArray(given) && given.length === question.correctIndices.length;
  if (question.type === 'matrix') {
    return Array.isArray(given) && question.rows.every((_, i) => given[i] !== undefined && given[i] !== null);
  }
  return given !== undefined && given !== null;
}

function scoreByTopic(session) {
  const totals = {};
  for (const id of session.answers.keys()) {
    const { topicId } = session.questions.find((q) => q.id === id);
    totals[topicId] ??= { attempted: 0, correct: 0 };
    totals[topicId].attempted += 1;
    if (isCorrect(session, id)) totals[topicId].correct += 1;
  }
  return totals;
}

function bandFor(percent) {
  if (percent >= 85) return 'bandStrong';
  if (percent >= 70) return 'bandGood';
  if (percent >= 50) return 'bandPass';
  return 'bandBelow';
}

function packAnswers(session) {
  return [...session.answers.entries()];
}

function restoreSession(questions, packed) {
  const known = new Set(questions.map((q) => q.id));
  return { questions, answers: new Map(packed.filter(([id]) => known.has(id))) };
}

// Kit numbers as short ranges, so the book can be followed: [1, 2, 3, 5] -> "Q1–3, Q5".
function kitRange(refs) {
  const sorted = [...new Set(refs)].sort((a, b) => a - b);
  const runs = [];
  for (const n of sorted) {
    const run = runs[runs.length - 1];
    if (run && n === run[1] + 1) run[1] = n;
    else runs.push([n, n]);
  }
  return runs.map(([a, b]) => (a === b ? `Q${a}` : `Q${a}–${b}`)).join(', ');
}

// The answer key written out, for showing an answer outside the quiz.
function answerText(q) {
  if (q.type === 'single') return q.options[q.correctIndex];
  if (q.type === 'multi') return q.correctIndices.map((i) => q.options[i]).join('; ');
  if (q.type === 'number') return q.answerText;
  if (q.type === 'matrix') return q.rows.map((row) => `${row.text}: ${q.columns[row.correctIndex]}`).join('\n');
  return '';
}

if (typeof module !== 'undefined') module.exports = { startSession, answer, isCorrect, score, isComplete, scoreByTopic, bandFor, packAnswers, restoreSession, parseAmount, kitRange, answerText };
else (globalThis.ACCA ??= {}).quiz = { startSession, answer, isCorrect, score, isComplete, scoreByTopic, bandFor, packAnswers, restoreSession, parseAmount, kitRange, answerText };
