'use strict';

// A side panel for questions while studying: search the site, ask Claude (only on the
// claude.ai copy of the site), or hand the question to the student's own NotebookLM notebook.
(function () {
  const { el, richText, richTextT } = ACCA.dom;
  const { translate: t, label } = ACCA.i18n;
  const MODE_KEY = 'acca-fa-helper-mode';
  const NOTEBOOK_KEY = 'acca-fa-notebook';
  const MODES = ['search', 'claude', 'notebook'];
  const LANG_NAMES = { en: 'English', ru: 'Russian', uz: 'Uzbek' };

  let lang = 'en';
  let panel = null;
  let mode = read(MODE_KEY, 'search');
  let draft = '';
  const turns = [];
  let controller = null;

  function read(key, fallback) {
    try {
      return window.localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Remembered until the page closes.
    }
  }

  // ---- Search ----
  const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'of', 'to', 'in', 'and', 'or', 'what', 'how', 'why', 'do', 'does', 'i', 'it', 'for', 'on', 'with', 'что', 'как', 'это', 'и', 'в', 'на', 'по', 'nima', 'qanday', 'va']);

  function normal(text) {
    return text.toLowerCase().replace(/ё/g, 'е').replace(/[’`]/g, "'");
  }

  function tokens(query) {
    return normal(query).split(/[^\p{L}\p{N}']+/u).filter((w) => w.length > 1 && !STOP.has(w))
      .map((w) => (w.length > 5 && /[^a-z0-9']/.test(w) ? w.slice(0, -2) : w));
  }

  let docs = null;

  function buildDocs() {
    const out = [];
    for (const group of ACCA.course) {
      for (const meta of group.chapters) {
        const chapter = ACCA.chapters[meta.id];
        if (!chapter) continue;
        chapter.sections.forEach((s, i) => out.push({
          kind: 'lesson', chapter: meta.number, title: s.heading, href: `#/chapter/${meta.number}/${i}`,
          fields: [s.heading, s.simple, s.key, s.example, s.exam, s.body].filter(Boolean),
          snippet: s.simple ?? s.key,
        }));
        for (const q of ACCA.questions[meta.id] ?? []) {
          out.push({ kind: 'question', chapter: meta.number, q, fields: [{ en: q.text }, q.explanation] });
        }
      }
    }
    for (const entry of ACCA.glossary.all()) {
      out.push({ kind: 'term', chapter: entry.chapter, entry, title: entry.term, fields: [entry.term, entry.definition, entry.example].filter(Boolean), snippet: entry.definition });
    }
    return out;
  }

  function haystack(doc) {
    doc.hay ??= {};
    doc.hay[lang] ??= normal(doc.fields.map((f) => `${f.en ?? ''} ${f[lang] ?? ''}`).join(' '));
    return doc.hay[lang];
  }

  function search(query) {
    docs ??= buildDocs();
    const kit = query.match(/^\s*q?\s*(\d{1,3})\s*$/i);
    if (kit) return docs.filter((d) => d.kind === 'question' && d.q.kitRef === Number(kit[1]));
    const words = tokens(query);
    if (words.length === 0) return [];
    const weight = { term: 3, lesson: 2, question: 0 };
    return docs.map((doc) => {
      const hay = haystack(doc);
      const matched = words.filter((w) => hay.includes(w)).length;
      const title = doc.title ? normal(`${doc.title.en} ${doc.title[lang]}`) : '';
      const inTitle = words.filter((w) => title.includes(w)).length;
      return { doc, matched, score: matched * 10 + inTitle * 6 + weight[doc.kind] };
    }).filter((r) => r.matched === words.length || (words.length > 2 && r.matched >= words.length - 1))
      .sort((a, b) => b.score - a.score).slice(0, 12).map((r) => r.doc);
  }

  function firstLine(field) {
    return t(field, lang).trim().split('\n')[0].replace(/^[-#=!]\s/, '');
  }

  function questionResult(doc) {
    const { q } = doc;
    const body = el('div', { class: 'helper-answer', hidden: true },
      el('p', { class: 'helper-q', lang: 'en' }, q.text),
      el('p', { class: 'feedback-answer' }, `${label('correctAnswer', lang)}: ${ACCA.quiz.answerText(q)}`),
      richTextT(q.explanation, lang));
    return el('li', { class: 'helper-result' },
      el('button', {
        type: 'button', class: 'helper-hit', 'aria-expanded': 'false',
        onclick: (event) => {
          body.hidden = !body.hidden;
          event.currentTarget.setAttribute('aria-expanded', String(!body.hidden));
        },
      },
      el('span', { class: 'helper-kind' }, `${label('chapter', lang)} ${doc.chapter} · Kit Q${q.kitRef}`),
      el('span', { class: 'helper-title', lang: 'en' }, q.text.length > 110 ? `${q.text.slice(0, 110)}…` : q.text)),
      body);
  }

  function result(doc) {
    if (doc.kind === 'question') return questionResult(doc);
    const kind = doc.kind === 'term' ? label('termKind', lang) : label('lessonKind', lang);
    const meta = el('span', { class: 'helper-kind' }, `${kind} · ${label('chapter', lang)} ${doc.chapter}`);
    const text = [meta, el('span', { class: 'helper-title' }, t(doc.title, lang)), el('span', { class: 'helper-snippet' }, firstLine(doc.snippet))];
    if (doc.kind === 'term') {
      return el('li', { class: 'helper-result' }, el('button', { type: 'button', class: 'helper-hit', onclick: () => ACCA.glossary.openCard(doc.entry, lang) }, text));
    }
    return el('li', { class: 'helper-result' }, el('a', { class: 'helper-hit', href: doc.href, onclick: close }, text));
  }

  function searchPane() {
    const list = el('ul', { class: 'helper-results', 'aria-live': 'polite' });
    const update = (value) => {
      draft = value;
      const found = value.trim() ? search(value) : [];
      list.replaceChildren(...(value.trim() && found.length === 0 ? [el('li', { class: 'hint' }, label('noResults', lang))] : found.map(result)));
    };
    const input = el('input', {
      type: 'search', class: 'search', value: draft, placeholder: label('searchPlaceholder', lang), 'aria-label': label('searchPlaceholder', lang),
      oninput: (event) => update(event.target.value),
    });
    queueMicrotask(() => update(draft));
    return [el('p', { class: 'hint' }, label('searchHint', lang)), input, list];
  }

  // ---- Ask Claude ----
  let samplePromise = null;

  function getSample() {
    if (!window.claude?.use) return Promise.resolve(null);
    samplePromise ??= window.claude.use('sample').catch(() => null);
    return samplePromise;
  }

  function currentChapter() {
    const m = window.location.hash.match(/^#\/(?:chapter\/(\d+)|quiz\/chapter-(\d+))/);
    return m ? Number(m[1] ?? m[2]) : null;
  }

  function notesFor(question) {
    const parts = [];
    const add = (text) => { if (parts.join('\n').length < 14000) parts.push(text); };
    const here = currentChapter();
    if (here) {
      const chapter = Object.values(ACCA.chapters).find((c) => c.id === `chapter-${String(here).padStart(2, '0')}`);
      if (chapter) add(`The student is on chapter ${here}: ${chapter.titles.en}. Its key points:\n${chapter.sections.map((s) => `${s.heading.en}\n${s.key.en}`).join('\n')}`);
    }
    for (const doc of search(question)) {
      if (doc.kind === 'term') add(`Term (chapter ${doc.chapter}): ${doc.entry.term.en}: ${doc.entry.definition.en}`);
      if (doc.kind === 'lesson') add(`Lesson (chapter ${doc.chapter}) ${doc.title.en}:\n${doc.fields.slice(1).map((f) => f.en).join('\n')}`);
      if (doc.kind === 'question') add(`Practice question Kit Q${doc.q.kitRef}: ${doc.q.text}\nAnswer: ${ACCA.quiz.answerText(doc.q)}\nExplanation: ${doc.q.explanation.en}`);
    }
    return parts.join('\n\n');
  }

  function rules(question) {
    return `You are a patient tutor helping a student pass ACCA Financial Accounting (FA / F3). The student finds the textbook hard to follow.
- Answer in ${LANG_NAMES[lang]}.${lang === 'en' ? '' : ' Give the official English exam term in brackets the first time you use a term.'}
- First explain the idea in one or two plain sentences, as if to a friend with no accounting background.
- Then give one tiny everyday example with small round numbers.
- For a calculation, go step by step: say what each figure is, what you add or take away and why, then the result.
- Keep it under 220 words. Plain text only: no markdown, no ** or #. Start a line with "- " for a bullet.
- Use the study notes below. If they do not cover the question, answer from the ACCA FA syllabus and IFRS, and say the notes do not cover it.
- If the question is not about accounting, say you can only help with ACCA Financial Accounting.

STUDY NOTES FROM THE SITE
${notesFor(question)}`;
  }

  function clean(text) {
    return text.replace(/\*\*|__/g, '').replace(/^#+\s*/gm, '').replace(/^\* /gm, '- ');
  }

  function bubble(role, text) {
    return el('div', { class: `bubble ${role}` }, role === 'user' ? el('p', {}, text) : richText(clean(text) || '…'));
  }

  const ERRORS = {
    not_granted: 'claudeNotGranted', sampling_disabled: 'claudeNotGranted', not_declared: 'claudeNotGranted', capability_disabled: 'claudeNotGranted', capability_removed: 'claudeNotGranted',
    rate_limited: 'claudeBusy', session_expired: 'claudeSignIn', refused: 'claudeRefused', prompt_too_large: 'claudeTooLong',
  };

  function claudePane() {
    const log = el('div', { class: 'chat-log', 'aria-live': 'polite' }, turns.map((turn) => bubble(turn.role, turn.content)));
    const status = el('p', { class: 'hint', role: 'status' });
    const box = el('textarea', { class: 'helper-input', rows: 3, placeholder: label('askPlaceholder', lang), 'aria-label': label('askPlaceholder', lang) });
    box.value = draft;
    box.addEventListener('input', () => { draft = box.value; });
    const stop = el('button', { type: 'button', class: 'button', hidden: true, onclick: () => controller?.abort() }, label('stop', lang));
    const send = el('button', { type: 'button', class: 'button primary' }, label('send', lang));
    const form = el('div', { class: 'helper-form' }, box, el('div', { class: 'helper-actions' }, stop, send));
    const unavailable = el('p', { class: 'helper-note' }, label('claudeOnlyOnline', lang));
    form.hidden = true;
    status.textContent = label('claudeChecking', lang);

    getSample().then((sample) => {
      status.textContent = '';
      if (!sample) {
        form.replaceWith(unavailable);
        return;
      }
      form.hidden = false;
      const ask = async () => {
        const question = box.value.trim();
        if (!question || controller) return;
        turns.push({ role: 'user', content: question });
        log.append(bubble('user', question));
        const answer = bubble('assistant', '');
        answer.replaceChildren(el('p', { class: 'hint' }, label('thinking', lang)));
        log.append(answer);
        box.value = '';
        draft = '';
        controller = new AbortController();
        send.disabled = true;
        stop.hidden = false;
        try {
          const history = turns.slice(-7);
          const { text } = await sample([{ role: 'user', content: rules(question) }, ...history], {
            cache: false, signal: controller.signal,
            onText: ({ text: so }) => { answer.replaceChildren(...richText(clean(so))); },
          });
          turns.push({ role: 'assistant', content: text });
        } catch (e) {
          if (e?.text) answer.replaceChildren(...richText(clean(e.text)));
          else answer.remove();
          if (e?.code !== 'cancelled') status.textContent = label(ERRORS[e?.code] ?? 'claudeFailed', lang);
          if (ERRORS[e?.code] === 'claudeNotGranted') form.replaceWith(unavailable);
        } finally {
          controller = null;
          send.disabled = false;
          stop.hidden = true;
        }
      };
      send.addEventListener('click', ask);
      box.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          ask();
        }
      });
    });
    return [el('p', { class: 'hint' }, label('claudeHint', lang)), log, status, form];
  }

  // ---- NotebookLM ----
  const NOTEBOOK_HOST = /^https:\/\/notebooklm\.google\.com\//;

  async function copy(text, box) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      box.select();
      try {
        return document.execCommand('copy');
      } catch {
        return false;
      }
    }
  }

  function notebookPane() {
    const saved = read(NOTEBOOK_KEY, '');
    const link = el('input', { type: 'url', class: 'search', value: saved, placeholder: 'https://notebooklm.google.com/notebook/…', 'aria-label': label('notebookLink', lang) });
    const linkNote = el('p', { class: 'hint', role: 'status' });
    link.addEventListener('change', () => {
      const value = link.value.trim();
      if (value === '' || NOTEBOOK_HOST.test(value)) {
        write(NOTEBOOK_KEY, value);
        linkNote.textContent = value ? label('notebookSaved', lang) : '';
        open.href = value || 'https://notebooklm.google.com/';
      } else {
        linkNote.textContent = label('notebookBadLink', lang);
      }
    });
    const box = el('textarea', { class: 'helper-input', rows: 3, placeholder: label('askPlaceholder', lang), 'aria-label': label('askPlaceholder', lang) });
    box.value = draft;
    box.addEventListener('input', () => { draft = box.value; });
    const simple = el('input', { type: 'checkbox', checked: true });
    const status = el('p', { class: 'hint', role: 'status' });
    const open = el('a', {
      class: 'button primary', target: '_blank', rel: 'noopener noreferrer', href: NOTEBOOK_HOST.test(saved) ? saved : 'https://notebooklm.google.com/',
      onclick: () => {
        const question = box.value.trim();
        if (!question) return;
        const text = simple.checked ? `${label('notebookPrefix', lang)} ${question}` : question;
        copy(text, box).then((ok) => { status.textContent = label(ok ? 'notebookCopied' : 'notebookCopyYourself', lang); });
      },
    }, label('notebookOpen', lang));
    return [
      el('p', { class: 'hint' }, label('notebookHint', lang)),
      el('ol', { class: 'helper-steps' }, ['notebookStep1', 'notebookStep2', 'notebookStep3'].map((k) => el('li', {}, label(k, lang)))),
      el('label', { class: 'helper-field' }, el('span', {}, label('notebookLink', lang)), link), linkNote,
      el('div', { class: 'helper-form' }, box,
        el('label', { class: 'helper-check' }, simple, el('span', {}, label('notebookSimple', lang))),
        el('div', { class: 'helper-actions' }, open)),
      status,
    ];
  }

  // ---- Panel ----
  function body() {
    if (mode === 'claude') return claudePane();
    if (mode === 'notebook') return notebookPane();
    return searchPane();
  }

  function render() {
    if (!panel) return;
    const tabs = el('div', { class: 'segments helper-tabs', role: 'tablist' }, MODES.map((m) => el('button', {
      type: 'button', role: 'tab', class: `segment${mode === m ? ' is-on' : ''}`, 'aria-selected': String(mode === m),
      onclick: () => {
        mode = m;
        write(MODE_KEY, m);
        render();
      },
    }, label(`helper_${m}`, lang))));
    panel.replaceChildren(
      el('div', { class: 'helper-head' },
        el('h2', { id: 'helper-title' }, label('helperTitle', lang)),
        el('button', { type: 'button', class: 'term-card-close', 'aria-label': label('close', lang), onclick: close }, '×')),
      tabs,
      el('div', { class: 'helper-body' }, body()));
    panel.querySelector('.helper-body input, .helper-body textarea')?.focus({ preventScroll: true });
  }

  function onKey(event) {
    if (event.key === 'Escape' && !document.querySelector('.term-card')) close();
  }

  function open() {
    if (panel) return;
    panel = el('aside', { class: 'helper', role: 'dialog', 'aria-labelledby': 'helper-title' });
    document.body.append(panel);
    document.body.classList.add('helper-open');
    document.addEventListener('keydown', onKey);
    render();
  }

  function close() {
    if (!panel) return;
    controller?.abort();
    panel.remove();
    panel = null;
    document.body.classList.remove('helper-open');
    document.removeEventListener('keydown', onKey);
    document.getElementById('helper-toggle')?.focus({ preventScroll: true });
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    render();
  }

  if (!MODES.includes(mode)) mode = 'search';
  document.getElementById('helper-toggle')?.addEventListener('click', () => (panel ? close() : open()));

  ACCA.helper = { open, close, setLang };
})();
