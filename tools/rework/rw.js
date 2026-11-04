// Applies a rewrite patch to one chapter's lesson and question files, checks it, and writes them back.
// usage: node rw.js <project dir> <chapter number> <patch file> [--dry]
const fs = require('fs');
const path = require('path');

const [, , root, num, patchFile, flag] = process.argv;
const NN = String(num).padStart(2, '0');
const chapterPath = path.join(root, 'data', `chapter-${NN}.js`);
const questionsPath = path.join(root, 'data', `questions-ch${NN}.js`);
const chapter = require(chapterPath);
const questions = require(questionsPath);
const patch = require(path.resolve(patchFile));
const LANGS = ['en', 'ru', 'uz'];
const problems = [];

const tri = (v, where) => {
  if (!v) return undefined;
  const f = Array.isArray(v) ? { en: v[0], ru: v[1], uz: v[2] } : v;
  for (const l of LANGS) if (typeof f[l] !== 'string' || !f[l].trim()) problems.push(`${where}: ${l} missing`);
  for (const l of LANGS) if (typeof f[l] === 'string') f[l] = f[l].replace(/^\n+|\s+$/g, '');
  return f;
};
const shape = (t) => t.trim().split(/\n\s*\n/).map((b) => b.split('\n').map((line) => (line.match(/^(# |= |! | {2}|- )/) ?? [''])[0]).join('|')).join('/');
const sameShape = (f, where) => {
  for (const l of ['ru', 'uz']) if (shape(f[l]) !== shape(f.en)) problems.push(`${where}: ${l} line shape differs\n   en ${shape(f.en)}\n   ${l} ${shape(f[l])}`);
};

// ---- lesson ----
if (patch.sections) {
  if (patch.sections.length !== chapter.sections.length) problems.push(`sections: patch has ${patch.sections.length}, chapter has ${chapter.sections.length}`);
  chapter.sections = chapter.sections.map((s, i) => {
    const p = patch.sections[i] ?? {};
    const out = { ...s };
    for (const field of ['heading', 'simple', 'key', 'exam', 'example', 'body']) {
      if (p[field]) out[field] = tri(p[field], `section ${i} ${field}`);
    }
    return out;
  });
}
if (patch.order) chapter.sections = patch.order.map((i) => chapter.sections[i]);
if (patch.terms) {
  const known = new Set(chapter.glossary.map((g) => g.term.en));
  for (const name of Object.keys(patch.terms)) if (!known.has(name)) problems.push(`term example for unknown term ${name}`);
  chapter.glossary = chapter.glossary.map((g) => ({ ...g, ...(patch.terms[g.term.en] ? { example: tri(patch.terms[g.term.en], `${g.term.en} example`) } : {}) }));
}
for (const add of patch.add ?? []) {
  const entry = { term: tri(add.term, 'new term'), definition: tri(add.definition, `${add.term[0]} definition`), example: tri(add.example, `${add.term[0]} example`) };
  if (add.at === undefined) chapter.glossary.push(entry);
  else chapter.glossary.splice(add.at, 0, entry);
}

if (patch.glossaryOrder) {
  const byName = new Map(chapter.glossary.map((g) => [g.term.en, g]));
  const missing = patch.glossaryOrder.filter((n) => !byName.has(n));
  const left = chapter.glossary.filter((g) => !patch.glossaryOrder.includes(g.term.en)).map((g) => g.term.en);
  if (missing.length) problems.push(`glossaryOrder names unknown terms: ${missing}`);
  if (left.length) problems.push(`glossaryOrder leaves out: ${left}`);
  if (!missing.length && !left.length) chapter.glossary = patch.glossaryOrder.map((n) => byName.get(n));
}
for (const name of patch.drop ?? []) chapter.glossary = chapter.glossary.filter((g) => g.term.en !== name);
for (const q of questions) {
  if (patch.texts?.[q.kitRef]) q.text = patch.texts[q.kitRef];
  if (patch.options?.[q.kitRef]) q.options = patch.options[q.kitRef];
}
if (patch.objectives) chapter.objectives = patch.objectives.map((o, i) => tri(o, `objective ${i}`));

// ---- checks on the lesson ----
chapter.sections.forEach((s, i) => {
  for (const field of ['simple', 'example']) if (!s[field]) problems.push(`section ${i} has no ${field}`);
  if (s.example) sameShape(s.example, `section ${i} example`);
  if (s.simple) sameShape(s.simple, `section ${i} simple`);
  for (const field of ['key', 'exam']) {
    if (!s[field]) continue;
    const counts = LANGS.map((l) => s[field][l].trim().split('\n').length);
    if (new Set(counts).size > 1) problems.push(`section ${i} ${field} line counts ${counts}`);
  }
  for (const l of LANGS) for (const line of s.key[l].trim().split('\n')) if (line.length > 120 || !line.startsWith('- ')) problems.push(`section ${i} key ${l} bad line: ${line}`);
  if (s.key.en.trim().split('\n').length > 6) problems.push(`section ${i} key has more than 6 points`);
  const paras = LANGS.map((l) => s.body[l].trim().split(/\n\s*\n/).length);
  if (new Set(paras).size > 1) problems.push(`section ${i} body paragraphs ${paras}`);
});
for (const g of chapter.glossary) if (!g.example) problems.push(`term ${g.term.en} has no example`);
const madina = JSON.stringify(chapter).match(/Madina/g);
if (madina) problems.push(`Madina still appears ${madina.length} times in the chapter`);

// ---- answers ----
if (patch.answers) {
  for (const q of questions) {
    const a = patch.answers[q.kitRef];
    if (!a) { problems.push(`Q${q.kitRef} has no new answer`); continue; }
    q.explanation = tri(a, `Q${q.kitRef}`);
    sameShape(q.explanation, `Q${q.kitRef}`);
  }
  for (const k of Object.keys(patch.answers)) if (!questions.some((q) => String(q.kitRef) === k)) problems.push(`answer for Q${k} which is not in this chapter`);
  const qm = JSON.stringify(questions).match(/Madina/g);
  if (qm) problems.push(`Madina still appears ${qm.length} times in the questions`);
}

if (problems.length) {
  console.log(`PROBLEMS (${problems.length}):\n- ${problems.join('\n- ')}`);
  process.exit(1);
}

// ---- write ----
const str = (s, ind) => {
  if (s.includes('\n')) return '`' + s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
};
function ser(v, ind = '') {
  const next = ind + '  ';
  if (typeof v === 'string') return str(v, ind);
  if (typeof v === 'number' || typeof v === 'boolean' || v === null) return String(v);
  if (Array.isArray(v)) {
    const flat = v.every((x) => typeof x !== 'object' || x === null);
    const inner = v.map((x) => ser(x, next));
    if (flat && inner.join(', ').length < 100 && !inner.some((x) => x.includes('\n'))) return `[${inner.join(', ')}]`;
    return `[\n${inner.map((x) => next + x).join(',\n')},\n${ind}]`;
  }
  const entries = Object.entries(v).filter(([, x]) => x !== undefined);
  const parts = entries.map(([k, x]) => `${/^[a-zA-Z_]\w*$/.test(k) ? k : JSON.stringify(k)}: ${ser(x, next)}`);
  const oneLine = `{ ${parts.join(', ')} }`;
  if (oneLine.length < 110 && !oneLine.includes('\n')) return oneLine;
  return `{\n${parts.map((x) => next + x).join(',\n')},\n${ind}}`;
}

const name = `chapter${NN}`;
const chapterSrc = `'use strict';\n\nconst ${name} = ${ser(chapter)};\n\nif (typeof module !== 'undefined') module.exports = ${name};\nelse ((globalThis.ACCA ??= {}).chapters ??= {})[${name}.id] = ${name};\n`;
const questionsSrc = `'use strict';\n\n// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.\n(function () {\n  const TOPIC = 'chapter-${NN}';\n  const questions = ${ser(questions, '  ')};\n\n  if (typeof module !== 'undefined') module.exports = questions;\n  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;\n})();\n`;

if (flag === '--dry') {
  console.log('OK (dry run)');
} else {
  if (patch.sections || patch.terms || patch.add || patch.order || patch.glossaryOrder || patch.objectives) fs.writeFileSync(chapterPath, chapterSrc);
  if (patch.answers || patch.texts || patch.options) fs.writeFileSync(questionsPath, questionsSrc);
  // Re-load what was written to be sure it parses and matches.
  delete require.cache[require.resolve(chapterPath)];
  delete require.cache[require.resolve(questionsPath)];
  const c2 = require(chapterPath);
  const q2 = require(questionsPath);
  if (JSON.stringify(c2) !== JSON.stringify(chapter)) throw new Error('chapter round trip differs');
  if (JSON.stringify(q2) !== JSON.stringify(questions)) throw new Error('questions round trip differs');
  console.log(`OK: chapter ${NN} written (${chapter.sections.length} sections, ${chapter.glossary.length} terms, ${questions.length} questions)`);
}
