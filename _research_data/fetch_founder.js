const fs = require('fs');

async function fetchFounder() {
  try {
    const res = await fetch('https://www.mirchmedia.com/founder');
    if (res.ok) {
      const html = await res.text();
      fs.writeFileSync('mirch_founder.html', html);
      console.log('Saved mirch_founder.html Length:', html.length);
    } else {
      console.log('Status:', res.status);
    }
  } catch(e) {
    console.error(e);
  }
}
fetchFounder();
