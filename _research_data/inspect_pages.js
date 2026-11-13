const fs = require('fs');

function inspect(file) {
  console.log('====== ' + file + ' ======');
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf8');
  let clean = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  const textBlocks = clean.replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('<!--') && !s.startsWith('{') && !s.includes('function()'));
  const seen = new Set();
  const unique = [];
  for (const line of textBlocks) {
    if (line.length > 3 && !seen.has(line)) {
      seen.add(line);
      unique.push(line);
    }
  }
  console.log(unique.join('\n'));

  console.log('\n--- Images in ' + file + ' ---');
  const imgMatches = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:jpg|jpeg|png|webp|svg|gif|mp4))/gi) || [];
  console.log([...new Set(imgMatches)].join('\n'));
}

inspect('archive_about.html');
inspect('archive_contact.html');
