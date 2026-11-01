'use strict';

function startSession(questions) {
  return { questions, answers: new Map() };
}

function answer(session, questionId, selectedIndex) {
  const answers = new Map(session.answers);
  answers.set(questionId, selectedIndex);
  return { ...session, answers };
}

function isCorrect(session, questionId) {
  const question = session.questions.find((q) => q.id === questionId);
  return session.answers.get(questionId) === question.correctIndex;
}

function score(session) {
  const answered = [...session.answers.keys()];
  return {
    attempted: answered.length,
    correct: answered.filter((id) => isCorrect(session, id)).length,
  };
}

if (typeof module !== 'undefined') module.exports = { startSession, answer, isCorrect, score };
else (globalThis.ACCA ??= {}).quiz = { startSession, answer, isCorrect, score };
