const fs = require('fs');

const bundle = fs.readFileSync('main_bundle.js', 'utf8');

// In Angular ivy bundles, templates are compiled into functions with ɵɵelementStart, ɵɵtext, etc., or template literals.
// Let's search for all template strings, text nodes, and component definitions.
const lines = bundle.split('\n');

// Let's find occurrences of components or templates
const templateMatches = bundle.match(/ɵɵtext\(\d+,\s*["'`]([^"'`]+)["'`]\)/g) || [];
const texts = templateMatches.map(m => {
  const match = m.match(/ɵɵtext\(\d+,\s*["'`]([^"'`]+)["'`]\)/);
  return match ? match[1].trim() : '';
}).filter(t => t.length > 0 && !t.startsWith('\\n'));

fs.writeFileSync('all_template_texts.txt', texts.join('\n'));

// Let's also look for all strings in the bundle and output interesting sections
const allStrings = [];
const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
let m;
while ((m = strRegex.exec(bundle)) !== null) {
  const s = (m[1] || m[2] || m[3] || '').trim();
  if (s.length > 15 && !s.includes('data:image') && !s.includes('webpack') && !s.includes('angular')) {
    allStrings.push(s);
  }
}

fs.writeFileSync('all_bundle_strings.txt', [...new Set(allStrings)].join('\n'));

console.log('Template texts extracted:', texts.length);
console.log('All strings extracted:', allStrings.length);
