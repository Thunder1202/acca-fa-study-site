'use strict';

const PROGRESS_KEY = 'acca-fa-progress';

function loadProgress(storage) {
  try {
    const saved = JSON.parse(storage.getItem(PROGRESS_KEY));
    return saved && typeof saved === 'object' ? saved : {};
  } catch {
    return {};
  }
}

function recordSession(storage, topicId, correct, attempted) {
  if (attempted === 0) return;
  const progress = loadProgress(storage);
  const previous = progress[topicId] ?? { attempted: 0, correct: 0 };
  progress[topicId] = {
    attempted: previous.attempted + attempted,
    correct: previous.correct + correct,
    lastScore: correct / attempted,
  };
  try {
    storage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Storage can be full or blocked; the session result is still shown on screen.
  }
}

function getWeakestFirst(storage, allTopicIds) {
  const progress = loadProgress(storage);
  const rank = (id) => progress[id]?.lastScore ?? -1;
  return [...allTopicIds].sort((a, b) => rank(a) - rank(b));
}

if (typeof module !== 'undefined') module.exports = { loadProgress, recordSession, getWeakestFirst };
else (globalThis.ACCA ??= {}).progress = { loadProgress, recordSession, getWeakestFirst };
