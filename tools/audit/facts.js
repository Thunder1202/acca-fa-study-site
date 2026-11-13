// Builds an rw.js patch that ADDS exam-note lines to a chapter's sections (keeping what is there).
// A facts file looks like: module.exports = require('./facts.js')(1, { 2: [[en, ru, uz], ...] });
// Each [en, ru, uz] is one "- " line. Run: node tools/rework/rw.js . <n> tools/audit/chNN.js [--dry]
const path = require('path');
module.exports = (num, additions, extra = {}) => {
  const NN = String(num).padStart(2, '0');
  const chapter = require(path.join(__dirname, '..', '..', 'data', `chapter-${NN}.js`));
  const sections = chapter.sections.map((s, i) => {
    const add = additions[i];
    if (!add) return {};
    const exam = ['en', 'ru', 'uz'].map((l, k) => {
      const old = s.exam ? s.exam[l].trim() : '';
      const lines = add.map((triple) => {
        const line = triple[k].trim();
        return line.startsWith('- ') ? line : `- ${line}`;
      });
      return [old, ...lines].filter(Boolean).join('\n');
    });
    return { exam };
  });
  return { sections, ...extra };
};
