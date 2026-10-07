const sharp = require('sharp');

async function processLogos() {
  const masterFile = 'public/images/brand/original-source-logo.jpeg';

  // 1. Trim master logo to exact content bounding box
  await sharp(masterFile)
    .trim()
    .png()
    .toFile('public/images/brand/creamy-day-full-logo.png');
  console.log('Saved creamy-day-full-logo.png');

  // 2. Extract emblem alone
  await sharp(masterFile)
    .extract({ left: 0, top: 0, width: 1619, height: 800 })
    .trim()
    .png()
    .toFile('public/images/brand/creamy-day-emblem.png');
  console.log('Saved creamy-day-emblem.png');

  // 3. Dark theme version with Golden tagline
  const { data, info } = await sharp(masterFile)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 805; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      const a = data[idx + 3];
      if (a > 20) {
        data[idx] = 255;     // R
        data[idx + 1] = 205; // G
        data[idx + 2] = 50;  // B
      }
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .trim()
    .png()
    .toFile('public/images/brand/creamy-day-dark-theme.png');
  console.log('Saved creamy-day-dark-theme.png');
}

processLogos().catch(console.error);
