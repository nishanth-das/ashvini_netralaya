const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
const webpFiles = new Set(
  fs.readdirSync(publicImagesDir)
    .filter(f => f.endsWith('.webp'))
    .map(f => f.slice(0, -5)) // baseName without .webp
);

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        getAllFiles(fullPath, fileList);
      }
    } else if (/\.(tsx|ts|jsx|js|json|css)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const srcDir = path.join(__dirname, '..', 'src');
const srcFiles = getAllFiles(srcDir);

let totalReplacements = 0;
let modifiedFiles = 0;

for (const filePath of srcFiles) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Match /images/filename.(png|jpg|jpeg)
  const regex = /\/images\/([^"'\s`)]+?)\.(png|jpg|jpeg)/gi;

  content = content.replace(regex, (match, baseName, ext) => {
    // Check if baseName has a corresponding .webp in public/images
    if (webpFiles.has(baseName)) {
      totalReplacements++;
      return `/images/${baseName}.webp`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    modifiedFiles++;
    console.log(`Updated images to .webp in: ${path.relative(path.join(__dirname, '..'), filePath)}`);
  }
}

console.log(`\nReplaced ${totalReplacements} image references across ${modifiedFiles} files.`);
