'use strict';

// A theme is a visual family; a mode is light or dark within it.
// To add a theme, list it in THEMES and style it under [data-theme="<name>"].
(function () {
  const THEME_KEY = 'acca-fa-theme';
  const MODE_KEY = 'acca-fa-mode';
  const THEMES = ['clean'];
  const MODES = ['light', 'dark'];
  // Earlier versions stored the mode in the theme key.
  const OLD_MODES = { clean: 'light', light: 'light', naruto: 'dark', dark: 'dark' };

  function read(storage, key) {
    try {
      return storage.getItem(key);
    } catch {
      return null;
    }
  }

  function write(storage, key, value) {
    try {
      storage.setItem(key, value);
    } catch {
      // The choice still applies until the page is closed.
    }
  }

  function getTheme(storage) {
    const saved = read(storage, THEME_KEY);
    return THEMES.includes(saved) ? saved : THEMES[0];
  }

  function getMode(storage, prefersDark = false) {
    const saved = read(storage, MODE_KEY) ?? OLD_MODES[read(storage, THEME_KEY)];
    if (MODES.includes(saved)) return saved;
    return prefersDark ? 'dark' : 'light';
  }

  const setMode = (storage, mode) => write(storage, MODE_KEY, mode);
  const nextMode = (mode) => (mode === 'dark' ? 'light' : 'dark');

  const api = { getTheme, getMode, setMode, nextMode, THEMES, MODES };
  if (typeof module !== 'undefined') module.exports = api;
  else (globalThis.ACCA ??= {}).theme = api;
})();
