const fs = require('fs');
const html = fs.readFileSync('mirch_founder.html', 'utf8');

console.log('=== Title ===');
const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log(titleMatch ? titleMatch[1] : 'None');

console.log('=== Headings ===');
const regexH = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
const headings = [];
while ((m = regexH.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text) headings.push(`${m[1].toUpperCase()}: ${text}`);
}
console.log(headings.join('\n'));

console.log('=== Media & Image URLs ===');
const imgMatches = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:jpg|jpeg|png|webp|svg|gif|mp4))/gi) || [];
const uniqueImgs = [...new Set(imgMatches)];
console.log('Unique images:', uniqueImgs.length);
uniqueImgs.forEach(u => console.log(u));

console.log('=== Videos & Iframes ===');
const vidMatches = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:mp4|webm))/gi) || [];
const iframeMatches = html.match(/(https?:\/\/(?:www\.)?(?:youtube\.com|vimeo\.com)[^\s"'()<>]+)/gi) || [];
console.log('Videos:', vidMatches);
console.log('Iframes:', [...new Set(iframeMatches)]);

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
fs.writeFileSync('founder_full_text.txt', unique.join('\n'));
console.log('Saved founder_full_text.txt with', unique.length, 'lines.');
