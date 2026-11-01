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

function isComplete(question, given) {
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

function rankFor(percent) {
  if (percent >= 85) return 'rankJonin';
  if (percent >= 70) return 'rankChunin';
  if (percent >= 50) return 'rankGenin';
  return 'rankAcademy';
}

if (typeof module !== 'undefined') module.exports = { startSession, answer, isCorrect, score, isComplete, scoreByTopic, rankFor };
else (globalThis.ACCA ??= {}).quiz = { startSession, answer, isCorrect, score, isComplete, scoreByTopic, rankFor };
