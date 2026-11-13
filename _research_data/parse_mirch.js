const fs = require('fs');
const html = fs.readFileSync('mirch_home.html', 'utf8');

console.log('=== Headings in Mirch Media ===');
const regexH = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
const headings = [];
while ((m = regexH.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text) headings.push(`${m[1].toUpperCase()}: ${text}`);
}
console.log(headings.slice(0, 30).join('\n'));

console.log('=== Media & Image URLs ===');
const imgMatches = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:jpg|jpeg|png|webp|svg|gif|mp4))/gi) || [];
const uniqueImgs = [...new Set(imgMatches)];
console.log('Unique images:', uniqueImgs.length);
uniqueImgs.slice(0, 40).forEach(u => console.log(u));

console.log('=== Videos / YouTube / Vimeo ===');
const iframes = html.match(/(https?:\/\/(?:www\.)?(?:youtube\.com|vimeo\.com|youtu\.be)[^\s"'()<>]+)/gi) || [];
console.log([...new Set(iframes)]);
