const fs = require('fs');
const html = fs.readFileSync('archive_home.html', 'utf8');

const urlMatches = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:jpg|jpeg|png|webp|svg|gif|mp4))/gi) || [];
const unique = [...new Set(urlMatches)];
console.log('Unique media URLs found:', unique.length);
console.log(unique.join('\n'));
