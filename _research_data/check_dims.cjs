const fs = require('fs');
const path = require('path');

function getWebpDimensions(buf) {
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const format = buf.toString('ascii', 12, 16);
    if (format === 'VP8 ') {
      const width = buf.readUInt16LE(26) & 0x3fff;
      const height = buf.readUInt16LE(28) & 0x3fff;
      return { width, height };
    } else if (format === 'VP8L') {
      const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
      const width = 1 + (((b1 & 0x3f) << 8) | b0);
      const height = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      return { width, height };
    } else if (format === 'VP8X') {
      const width = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
      const height = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
      return { width, height };
    }
  }
  return null;
}

const dir = 'public/media';
fs.readdirSync(dir).forEach(f => {
  const file = path.join(dir, f);
  if (f.endsWith('.webp')) {
    const buf = fs.readFileSync(file);
    const dim = getWebpDimensions(buf);
    if (dim) {
      console.log(f.padEnd(35), `${dim.width}x${dim.height}`, `AR: ${(dim.width / dim.height).toFixed(2)}`);
    } else {
      console.log(f.padEnd(35), 'Unknown dims');
    }
  }
});
