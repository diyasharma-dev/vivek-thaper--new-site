const fs = require('fs');

async function fetchAbout() {
  try {
    const res = await fetch('https://mirchmedia.com/about-us');
    if (res.ok) {
      const html = await res.text();
      fs.writeFileSync('mirch_about.html', html);
      console.log('Saved mirch_about.html', html.length);
      const imgs = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:jpg|jpeg|png|webp|svg|gif|mp4))/gi) || [];
      console.log('Unique imgs on about page:', [...new Set(imgs)]);
      
      const vids = html.match(/(https?:\/\/[^\s"'()<>]+?\.(?:mp4|webm))/gi) || [];
      console.log('Videos:', vids);
      const iframes = html.match(/(https?:\/\/(?:www\.)?(?:youtube\.com|vimeo\.com|player\.vimeo)[^\s"'()<>]+)/gi) || [];
      console.log('Iframes:', iframes);
    }
  } catch (e) {
    console.error(e);
  }
}
fetchAbout();
