const fs = require('fs');

const bundle = fs.readFileSync('main_bundle.js', 'utf8');

console.log('Bundle length:', bundle.length);

// Extract all strings that look like assets or image paths
const imgRegex = /assets\/[a-zA-Z0-9_\-\.\/]+/g;
const images = [...new Set(bundle.match(imgRegex) || [])];
console.log('\n--- EXTRACTED ASSETS/IMAGES ---');
console.log(images.slice(0, 50));

// Extract URLs, phone numbers, emails
const phoneRegex = /(?:\+?91[\-\s]?)?[6-9]\d{9}/g;
const phones = [...new Set(bundle.match(phoneRegex) || [])];
console.log('\n--- PHONES ---', phones);

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = [...new Set(bundle.match(emailRegex) || [])];
console.log('\n--- EMAILS ---', emails);

// Extract routes
const routeRegex = /path:\s*['"]([^'"]+)['"]/g;
let match;
const routes = [];
while ((match = routeRegex.exec(bundle)) !== null) {
  routes.push(match[1]);
}
console.log('\n--- ROUTES ---', [...new Set(routes)]);

// Extract strings longer than 20 chars with spaces
const textRegex = /["'`]([A-Z0-9][^"'`]{20,200})["'`]/g;
const texts = [];
while ((match = textRegex.exec(bundle)) !== null) {
  const t = match[1].trim();
  if (!t.includes('http') && !t.includes('node_modules') && !t.includes('webpack') && !t.includes('Zone') && !t.includes('angular')) {
    texts.push(t);
  }
}

fs.writeFileSync('extracted_texts.json', JSON.stringify({
  images,
  phones,
  emails,
  routes: [...new Set(routes)],
  texts: [...new Set(texts)]
}, null, 2));

console.log('Saved extracted_texts.json with', texts.length, 'sample text snippets');
