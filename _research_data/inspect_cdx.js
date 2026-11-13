const fs = require('fs');
const entries = JSON.parse(fs.readFileSync('cdx_entries.json', 'utf8'));

// Format: [ "urlkey", "timestamp", "original", "mimetype", "statuscode", "digest", "length" ]
const header = entries[0];
console.log('Header:', header);

const rows = entries.slice(1);
const mimeTypes = {};
const mediaRows = [];
const pageRows = [];

for (const row of rows) {
  const [urlkey, timestamp, original, mimetype, statuscode] = row;
  mimeTypes[mimetype] = (mimeTypes[mimetype] || 0) + 1;
  if (statuscode === '200') {
    if (mimetype && (mimetype.startsWith('image/') || mimetype.startsWith('video/') || original.match(/\.(jpg|jpeg|png|webp|svg|gif|mp4|mov)$/i))) {
      mediaRows.push({ timestamp, original, mimetype });
    } else if (mimetype === 'text/html') {
      pageRows.push({ timestamp, original });
    }
  }
}

console.log('Mime types counts:', mimeTypes);
console.log(`Found ${mediaRows.length} successful media files:`);
mediaRows.forEach(m => console.log(`${m.timestamp} [${m.mimetype}] ${m.original}`));

console.log(`Found ${pageRows.length} HTML pages:`);
const uniquePages = [...new Set(pageRows.map(p => p.original))];
console.log('Unique page URLs:', uniquePages);
