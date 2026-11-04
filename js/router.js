'use strict';

function parseRoute(hash) {
  const [view, param, extra] = hash.replace(/^#\/?/, '').split('/');
  if (view === 'chapter' && param) return { view, params: /^\d+$/.test(extra ?? '') ? { id: param, section: Number(extra) } : { id: param } };
  if (view === 'quiz' && param) return { view, params: { topicId: param } };
  if (view === 'exam') return { view, params: { step: param === 'paper' ? 'paper' : 'start' } };
  if (view === 'terms') return { view, params: {} };
  if (view === 'weak-areas' || view === 'practice') return { view, params: {} };
  return { view: 'home', params: {} };
}

function onHashChange(callback) {
  window.addEventListener('hashchange', () => callback(window.location.hash));
}

// Plain script, not an ES module: browsers refuse to load modules from file:// pages.
if (typeof module !== 'undefined') module.exports = { parseRoute, onHashChange };
else (globalThis.ACCA ??= {}).router = { parseRoute, onHashChange };
