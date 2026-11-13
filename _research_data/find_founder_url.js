const fs = require('fs');
const html = fs.readFileSync('mirch_about.html', 'utf8');
const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[2].toLowerCase().includes('founder') || m[2].toLowerCase().includes('vivek') || m[1].includes('founder') || m[1].includes('vivek')) {
    console.log(m[1], '-->', m[2].replace(/<[^>]+>/g, '').trim());
  }
}
