const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(dir);

async function run() {
  let totalOld = 0;
  let totalNew = 0;
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, `${baseName}.webp`);

    const stat = fs.statSync(inputPath);
    totalOld += stat.size;

    try {
      const img = sharp(inputPath);
      const metadata = await img.metadata();

      let pipeline = sharp(inputPath);
      if (metadata.width && metadata.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: 82, effort: 4 }).toFile(outputPath);

      const newStat = fs.statSync(outputPath);
      totalNew += newStat.size;
      count++;
      console.log(`Converted: ${file} (${Math.round(stat.size/1024)} KB) -> ${baseName}.webp (${Math.round(newStat.size/1024)} KB)`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
    }
  }

  console.log(`\n========================================`);
  console.log(`Total images converted: ${count}`);
  console.log(`Original total size: ${(totalOld / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`WebP total size:     ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Savings:             ${(((totalOld - totalNew) / totalOld) * 100).toFixed(1)}% reduction!`);
  console.log(`========================================\n`);
}

run();
