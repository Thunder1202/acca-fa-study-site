'use strict';

(function () {
  const THEME_KEY = 'acca-fa-theme';
  const THEMES = ['naruto', 'clean'];

  function getTheme(storage) {
    try {
      const saved = storage.getItem(THEME_KEY);
      return THEMES.includes(saved) ? saved : THEMES[0];
    } catch {
      return THEMES[0];
    }
  }

  function setTheme(storage, theme) {
    try {
      storage.setItem(THEME_KEY, theme);
    } catch {
      // The choice still applies until the page is closed.
    }
  }

  const api = { getTheme, setTheme, THEMES };
  if (typeof module !== 'undefined') module.exports = api;
  else (globalThis.ACCA ??= {}).theme = api;
})();
