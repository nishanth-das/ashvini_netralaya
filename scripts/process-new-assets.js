const sharp = require('sharp');
const path = require('path');

async function processAssets() {
  console.log('Processing Dr. Anurag Majumder picture...');
  // 1. Process Dr. Anurag Majumder picture to high-res optimized WebP
  await sharp('public/images/DrAnuragMajumder.jpeg')
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 86, effort: 6 })
    .toFile('public/images/DrAnuragMajumder.webp');
  console.log('Saved public/images/DrAnuragMajumder.webp');

  console.log('Processing BW logo.png...');
  // 2. Trim BW logo.png to remove large transparent borders
  const trimmed = await sharp('public/BW logo.png').trim().toBuffer({ resolveWithObject: true });
  console.log('Trimmed BW logo dimensions:', trimmed.info.width, 'x', trimmed.info.height);

  // Save the full stacked trimmed logo in WebP
  await sharp(trimmed.data)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile('public/images/ashvini-logo-white-stacked.webp');
  console.log('Saved public/images/ashvini-logo-white-stacked.webp');

  // Extract Eye Symbol (0 to 665 px of trimmed 1665x1102)
  const eye = await sharp(trimmed.data)
    .extract({ left: 0, top: 0, width: trimmed.info.width, height: 665 })
    .trim()
    .toBuffer({ resolveWithObject: true });

  // Extract Text ("Ashvini Netralaya / A unit of Ashvini Eye Care Pvt. Ltd")
  const text = await sharp(trimmed.data)
    .extract({ left: 0, top: 750, width: trimmed.info.width, height: trimmed.info.height - 750 })
    .trim()
    .toBuffer({ resolveWithObject: true });

  // Create Horizontal Lockup: Eye on Left + Text on Right
  // Target height 320 for eye, 270 for text
  const targetEyeHeight = 300;
  const resizedEye = await sharp(eye.data)
    .resize({ height: targetEyeHeight })
    .toBuffer({ resolveWithObject: true });

  const targetTextHeight = 250;
  const resizedText = await sharp(text.data)
    .resize({ height: targetTextHeight })
    .toBuffer({ resolveWithObject: true });

  const gap = 55;
  const canvasWidth = resizedEye.info.width + gap + resizedText.info.width;
  const canvasHeight = 320;

  const eyeTop = Math.round((canvasHeight - resizedEye.info.height) / 2);
  const textTop = Math.round((canvasHeight - resizedText.info.height) / 2);

  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: resizedEye.data, top: eyeTop, left: 0 },
    { input: resizedText.data, top: textTop, left: resizedEye.info.width + gap }
  ])
  .webp({ quality: 92, effort: 6 })
  .toFile('public/images/ashvini-logo-white.webp');

  console.log('Saved public/images/ashvini-logo-white.webp (Horizontal logo, ' + canvasWidth + 'x' + canvasHeight + ')');
}

processAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
