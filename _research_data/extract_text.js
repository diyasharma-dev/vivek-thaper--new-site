const fs = require('fs');
const html = fs.readFileSync('archive_home.html', 'utf8');

// Strip styles and scripts
let clean = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

// Extract visible text blocks
const textBlocks = clean.replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('<!--') && !s.startsWith('{') && !s.includes('function()'));

// Print unique paragraphs / text blocks
const seen = new Set();
const uniqueText = [];
for (const line of textBlocks) {
  if (line.length > 3 && !seen.has(line)) {
    seen.add(line);
    uniqueText.push(line);
  }
}

fs.writeFileSync('extracted_text.txt', uniqueText.join('\n'));
console.log('Saved extracted_text.txt with', uniqueText.length, 'lines.');
