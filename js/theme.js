'use strict';

(function () {
  const THEME_KEY = 'acca-fa-theme';
  const THEMES = ['light', 'dark'];
  const OLD_NAMES = { clean: 'light', naruto: 'dark' };

  function getTheme(storage, prefersDark = false) {
    const fallback = prefersDark ? 'dark' : 'light';
    try {
      const saved = storage.getItem(THEME_KEY);
      const name = OLD_NAMES[saved] ?? saved;
      return THEMES.includes(name) ? name : fallback;
    } catch {
      return fallback;
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
