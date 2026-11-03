'use strict';

(function () {
  const { el } = ACCA.dom;
  const { label } = ACCA.i18n;

  const clean = (alias) => alias.replace(/\*$/, '');
  const matches = (entry, query) => {
    if (!query) return true;
    const haystack = [entry.en, entry.ru, entry.uz, ...entry.also.map(clean)].join(' ').toLowerCase();
    return query.toLowerCase().split(/\s+/).every((word) => haystack.includes(word));
  };

  function card(entry, lang) {
    const translations = lang === 'en' ? [['ru', entry.ru], ['uz', entry.uz]] : [[lang, entry[lang]]];
    return el('li', { class: 'name-card' },
      el('h2', { lang: 'en' }, entry.en),
      entry.also.length > 0 && el('p', { class: 'also', lang: 'en' },
        el('span', { class: 'also-label', lang }, `${label('termsAlso', lang)}:`),
        entry.also.map((alias) => (alias.endsWith('*')
          ? el('span', { class: 'alias old', title: label('termsOld', lang) }, clean(alias))
          : el('span', { class: 'alias' }, alias)))),
      entry.formula && el('p', { class: 'formula', lang: 'en' }, entry.formula),
      translations.map(([code, text]) => el('p', { class: 'translation', lang: code }, text)));
  }

  function renderTerms(container, lang) {
    const names = ACCA.termNames;
    const list = el('ul', { class: 'name-list' });
    const empty = el('p', { class: 'hint', role: 'status', hidden: true }, label('termsNone', lang));
    const count = el('p', { class: 'hint', role: 'status' });
    const draw = (query) => {
      const shown = names.filter((entry) => matches(entry, query.trim()));
      list.replaceChildren(...shown.map((entry) => card(entry, lang)));
      empty.hidden = shown.length > 0;
      count.textContent = `${shown.length} / ${names.length}`;
    };
    const input = el('input', {
      id: 'terms-search', type: 'search', class: 'search', autocomplete: 'off', placeholder: label('termsSearch', lang),
      'aria-label': label('termsSearch', lang), oninput: (event) => draw(event.target.value),
    });
    draw('');
    container.replaceChildren(el('div', { class: 'page terms' },
      el('h1', {}, label('termsTitle', lang)),
      el('p', { class: 'lead' }, label('termsText', lang)),
      el('p', { class: 'hint' }, label('termsLegend', lang)),
      el('div', { class: 'search-row' }, input, count),
      empty,
      list));
  }

  ACCA.termsView = { renderTerms };
})();
