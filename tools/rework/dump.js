// Prints a chapter's English content and its questions compactly, for rewriting.
// usage: node dump.js <project dir> <chapter number> [lesson|questions]
const path = require('path');
const [, , root, num, part] = process.argv;
const NN = String(num).padStart(2, '0');
const c = require(path.join(root, 'data', `chapter-${NN}.js`));
const qs = require(path.join(root, 'data', `questions-ch${NN}.js`));
const mad = (f) => (f && /Madina/.test(JSON.stringify(f)) ? ' [MADINA]' : '');

if (part !== 'questions') {
  console.log(`# CHAPTER ${num}: ${c.titles.en}`);
  c.sections.forEach((s, i) => {
    console.log(`\n=== S${i}: ${s.heading.en}`);
    console.log(`KEY${mad(s.key)}:\n${s.key.en}`);
    if (s.exam) console.log(`EXAM${mad(s.exam)}:\n${s.exam.en}`);
    console.log(`BODY${mad(s.body)}:\n${s.body.en}`);
    console.log(`EXAMPLE${mad(s.example)}:\n${s.example.en}`);
  });
  console.log('\n=== GLOSSARY');
  for (const g of c.glossary) console.log(`- ${g.term.en} | ${g.term.ru} | ${g.term.uz}: ${g.definition.en}`);
  console.log(`objectives${mad(c.objectives)}`);
}
if (part !== 'lesson') {
  console.log(`\n=== QUESTIONS (${qs.length})`);
  for (const q of qs) {
    let key = '';
    if (q.type === 'single') key = `ANS ${'ABCD'[q.correctIndex]}`;
    if (q.type === 'multi') key = `ANS ${q.correctIndices.map((i) => 'ABCDEF'[i]).join('+')}`;
    if (q.type === 'number') key = `ANS ${q.answerText}${q.unit ? ` (${q.unit})` : ''}`;
    console.log(`\nQ${q.kitRef} [${q.type}]${mad(q)} ${q.text}`);
    if (q.table) console.log(`  TABLE ${JSON.stringify(q.table)}`);
    if (q.options) q.options.forEach((o, i) => console.log(`  ${'ABCDEF'[i]}) ${o}`));
    if (q.rows) q.rows.forEach((r) => console.log(`  - ${r.text} => ${q.columns[r.correctIndex]}`));
    if (key) console.log(`  ${key}`);
    console.log(`  OLD: ${q.explanation.en.replace(/\n/g, ' / ')}`);
  }
}
