// Replaces Section B task explanations in data/section-b.js, leaving the rest of the file as written.
// usage: node sb.js <project dir> <patch file> [--dry]
// patch: { b01: [[en, ru, uz], ...one per task], ... }
const fs = require('fs');
const path = require('path');

const [, , root, patchFile, flag] = process.argv;
const file = path.join(root, 'data', 'section-b.js');
const src = fs.readFileSync(file, 'utf8');
const cases = require(file);
const patch = require(path.resolve(patchFile));
const problems = [];

// Find every task(...) call and the source range of each top-level argument.
function findCalls(s) {
  const calls = [];
  let i = 0;
  const skipString = (j) => {
    const q = s[j];
    j++;
    while (j < s.length && s[j] !== q) j += s[j] === '\\' ? 2 : 1;
    return j + 1;
  };
  while (i < s.length) {
    const c = s[i];
    if (c === "'" || c === '"' || c === '`') { i = skipString(i); continue; }
    if (c === '/' && s[i + 1] === '/') { i = s.indexOf('\n', i); continue; }
    if (s.startsWith('task(', i) && !/[\w$]/.test(s[i - 1]) && !s.startsWith('task(topic', i)) {
      let j = i + 5, depth = 1, start = j;
      const args = [];
      while (depth > 0) {
        const d = s[j];
        if (d === "'" || d === '"' || d === '`') { j = skipString(j); continue; }
        if ('([{'.includes(d)) depth++;
        else if (')]}'.includes(d)) { depth--; if (depth === 0) { args.push([start, j]); break; } }
        else if (d === ',' && depth === 1) { args.push([start, j]); start = j + 1; }
        j++;
      }
      calls.push(args);
      i = j + 1;
      continue;
    }
    i++;
  }
  return calls;
}

const shape = (t) => t.trim().split(/\n\s*\n/).map((b) => b.split('\n').map((line) => (line.match(/^(# |= |! | {2}|- )/) ?? [''])[0]).join('|')).join('/');
const lit = (t) => '`' + t.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';

const calls = findCalls(src);
const flat = cases.flatMap((c) => c.tasks.map((t, k) => ({ c, k })));
if (calls.length !== flat.length) problems.push(`found ${calls.length} task calls but the data has ${flat.length} tasks`);
for (const id of Object.keys(patch)) {
  const c = cases.find((x) => x.id === id);
  if (!c) { problems.push(`unknown case ${id}`); continue; }
  if (patch[id].length !== c.tasks.length) problems.push(`${id}: patch has ${patch[id].length} answers, case has ${c.tasks.length} tasks`);
  patch[id].forEach((a, k) => {
    if (!Array.isArray(a) || a.length !== 3 || a.some((x) => typeof x !== 'string' || !x.trim())) { problems.push(`${id} task ${k}: need [en, ru, uz]`); return; }
    for (const l of [1, 2]) if (shape(a[l]) !== shape(a[0])) problems.push(`${id} task ${k} ${['', 'ru', 'uz'][l]} line shape differs\n   en ${shape(a[0])}\n   ${['', 'ru', 'uz'][l]} ${shape(a[l])}`);
  });
}
if (problems.length) { console.log(`PROBLEMS (${problems.length}):\n- ${problems.join('\n- ')}`); process.exit(1); }

// Replace from the end so earlier offsets stay valid.
const edits = [];
flat.forEach(({ c, k }, n) => {
  const a = patch[c.id]?.[k];
  if (!a) return;
  const args = calls[n];
  const ws = (r) => src.slice(r[0], r[1]).match(/^\s*/)[0];
  for (let l = 0; l < 3; l++) {
    const r = args[5 + l];
    edits.push([r[0], r[1], ws(r) + lit(a[l].replace(/^\n+|\s+$/g, ''))]);
  }
});
edits.sort((x, y) => y[0] - x[0]);
let out = src;
for (const [s, e, text] of edits) out = out.slice(0, s) + text + out.slice(e);

if (flag === '--dry') { console.log(`OK (dry run): ${edits.length / 3} explanations`); process.exit(0); }
fs.writeFileSync(file, out);
delete require.cache[require.resolve(file)];
const again = require(file);
let checked = 0;
again.forEach((c, i) => c.tasks.forEach((t, k) => {
  const a = patch[c.id]?.[k];
  const old = cases[i].tasks[k];
  const { explanation: e1, ...rest1 } = t;
  const { explanation: e2, ...rest2 } = old;
  if (JSON.stringify(rest1) !== JSON.stringify(rest2)) throw new Error(`${c.id} task ${k}: something other than the explanation changed`);
  if (a) { ['en', 'ru', 'uz'].forEach((l, j) => { if (e1[l] !== a[j].replace(/^\n+|\s+$/g, '')) throw new Error(`${c.id} task ${k} ${l} did not round-trip`); }); checked++; }
}));
console.log(`OK: ${checked} explanations written to data/section-b.js`);
