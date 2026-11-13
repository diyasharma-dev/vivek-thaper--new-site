const fs = require('fs');
const html = fs.readFileSync('archive_home.html', 'utf8');

console.log('=== Title ===');
const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log(titleMatch ? titleMatch[1] : 'None');

console.log('=== Headings ===');
const headings = [];
const regexH = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = regexH.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text) headings.push(`${m[1].toUpperCase()}: ${text}`);
}
console.log(headings.join('\n'));

console.log('=== Navigation Links ===');
const navLinks = [];
const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
while ((m = linkRegex.exec(html)) !== null) {
  const href = m[1];
  const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text && !href.startsWith('#') && !href.startsWith('javascript:')) {
    navLinks.push(`${text} -> ${href}`);
  }
}
console.log(navLinks.slice(0, 30).join('\n'));

console.log('=== Images ===');
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const imgs = [];
while ((m = imgRegex.exec(html)) !== null) {
  imgs.push(m[1]);
}
console.log(`Found ${imgs.length} images:`);
console.log(imgs.join('\n'));

console.log('=== Iframes / Videos ===');
const iframeRegex = /<iframe[^>]+src=["']([^"']+)["'][^>]*>/gi;
while ((m = iframeRegex.exec(html)) !== null) {
  console.log('Iframe:', m[1]);
}

const videoRegex = /<(video|source)[^>]+src=["']([^"']+)["'][^>]*>/gi;
while ((m = videoRegex.exec(html)) !== null) {
  console.log('Video:', m[2]);
}
