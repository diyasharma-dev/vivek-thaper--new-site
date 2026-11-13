const fs = require('fs');
const html = fs.readFileSync('mirch_about.html', 'utf8');

let clean = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
const textBlocks = clean.replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 0);

const seen = new Set();
const unique = [];
for (const line of textBlocks) {
  if (line.length > 3 && !seen.has(line)) {
    seen.add(line);
    unique.push(line);
  }
}
fs.writeFileSync('mirch_about_text.txt', unique.join('\n'));
console.log('Saved mirch_about_text.txt with lines:', unique.length);
