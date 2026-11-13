// Prints a chapter's English lesson (every field) and all its Kaplan and BPP questions with keys,
// so the questions can be checked against what the lesson teaches.
// usage: node tools/audit/dump.js <chapter number> [lesson|questions]
const path = require('path');
const root = path.join(__dirname, '..', '..');
const [, , num, part] = process.argv;
const NN = String(num).padStart(2, '0');
const c = require(path.join(root, 'data', `chapter-${NN}.js`));
const kap = require(path.join(root, 'data', `questions-ch${NN}.js`));
let bpp = [];
try { bpp = require(path.join(root, 'data', `bpp-ch${NN}.js`)); } catch {}
if (part !== 'questions') {
  console.log(`# CHAPTER ${num}: ${c.titles.en}`);
  c.sections.forEach((s, i) => {
    console.log(`\n=== S${i}: ${s.heading.en}`);
    for (const f of ['simple', 'key', 'exam', 'body', 'example']) if (s[f]) console.log(`[${f}]\n${s[f].en}`);
  });
  console.log('\n=== GLOSSARY');
  for (const g of c.glossary) console.log(`- ${g.term.en}: ${g.definition.en}${g.example ? ' | e.g. ' + g.example.en : ''}`);
}
if (part !== 'lesson') {
  for (const [label, qs] of [['KAPLAN', kap], ['BPP', bpp]]) {
    console.log(`\n=== ${label} (${qs.length})`);
    for (const q of qs) {
      let key = '';
      if (q.type === 'single') key = `ANS ${'ABCDEF'[q.correctIndex]}`;
      if (q.type === 'multi') key = `ANS ${q.correctIndices.map((i) => 'ABCDEF'[i]).join('+')}`;
      if (q.type === 'number') key = `ANS ${q.answerText}`;
      console.log(`\nQ${q.kitRef ?? q.bppRef} [${q.type}] ${q.text}`);
      if (q.table) console.log(`  TABLE ${JSON.stringify(q.table)}`);
      if (q.options) q.options.forEach((o, i) => console.log(`  ${'ABCDEF'[i]}) ${o}`));
      if (q.rows) q.rows.forEach((r) => console.log(`  - ${r.text} => ${q.columns[r.correctIndex]}`));
      if (key) console.log(`  ${key}`);
    }
  }
}
