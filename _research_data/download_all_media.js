const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'media');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  // Video
  { url: 'https://www.mirchmedia.com/videos/vivekedited.mp4', name: 'vivek-intro-video.mp4' },
  
  // High-Res Photos of Vivek Thapar
  { url: 'https://www.mirchmedia.com/vivek-thapar-digital-marketing-ceo.webp', name: 'vivek-thapar-ceo.webp' },
  { url: 'https://www.mirchmedia.com/vivek-thapar-mirch-media-founder.webp', name: 'vivek-thapar-founder.webp' },
  { url: 'https://www.mirchmedia.com/vivek-thapar-keynote-speaker.webp', name: 'vivek-thapar-keynote.webp' },
  { url: 'https://www.mirchmedia.com/vivek-thapar-team-strategy-session.webp', name: 'vivek-thapar-strategy.webp' },
  { url: 'https://www.mirchmedia.com/vivek-thapar-marketing-innovation-leader.webp', name: 'vivek-thapar-innovation.webp' },
  { url: 'https://www.mirchmedia.com/vivek-thapar-seo-consultant-nyc.webp', name: 'vivek-thapar-seo.webp' },
  { url: 'https://www.mirchmedia.com/vivek-thapar-award-winning-marketing-agency.webp', name: 'vivek-thapar-awards.webp' },
  { url: 'https://www.mirchmedia.com/modern-web-design-development-studio.webp', name: 'web-design-studio.webp' },
  { url: 'https://www.mirchmedia.com/mirch-media-nyc-office-hero.webp', name: 'nyc-office.webp' },

  // Logos
  { url: 'https://www.mirchmedia.com/mirchlogo.webp', name: 'mirch-logo.webp' },
  { url: 'https://www.mirchmedia.com/mirchmedia-og.webp', name: 'mirch-og.webp' },

  // Client Logos
  { url: 'https://www.mirchmedia.com/client-logos/accident.webp', name: 'client-1800accident.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/austin.webp', name: 'client-austin.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/etcpa.webp', name: 'client-etcpa.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/metropcs.webp', name: 'client-metropcs.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/zara.webp', name: 'client-zara.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/r-s.webp', name: 'client-rs.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/tobi.webp', name: 'client-tobi.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/communitypharmacy.webp', name: 'client-communitypharmacy.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/bespoke.webp', name: 'client-bespoke.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/barber.webp', name: 'client-barber.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/divs.webp', name: 'client-divs.webp' },
  { url: 'https://www.mirchmedia.com/client-logos/greenvisioneco.webp', name: 'client-greenvision.webp' },

  // Work & Case Studies
  { url: 'https://www.mirchmedia.com/workmasonry/vision.webp', name: 'work-vision.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/innovation.webp', name: 'work-innovation.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/collaboration.webp', name: 'work-collaboration.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/progress.webp', name: 'work-progress.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/foundation.webp', name: 'work-foundation.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/analytics.webp', name: 'work-analytics.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/creativity.webp', name: 'work-creativity.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/transformation.webp', name: 'work-transformation.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/ideas.webp', name: 'work-ideas.webp' },
  { url: 'https://www.mirchmedia.com/workmasonry/digital-marketing.webp', name: 'work-digital-marketing.webp' }
];

async function download(item) {
  const filePath = path.join(targetDir, item.name);
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
    console.log(`Already exists: ${item.name}`);
    return;
  }
  try {
    const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      console.warn(`Failed ${item.url} -> status ${res.status}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filePath, buf);
    console.log(`Saved ${item.name} (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Error downloading ${item.name}:`, err.message);
  }
}

async function run() {
  console.log(`Starting download of ${assets.length} client assets...`);
  for (const asset of assets) {
    await download(asset);
  }
  console.log('Finished downloading assets!');
}

run();
