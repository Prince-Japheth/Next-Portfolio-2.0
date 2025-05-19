const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

const SOURCE_DIR = path.join(process.cwd(), 'public/assets/images');
const OUTPUT_DIR = path.join(process.cwd(), 'public/assets/images/optimized');

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputPath) {
  const filename = path.basename(inputPath);
  const ext = path.extname(filename).toLowerCase();
  const nameWithoutExt = path.basename(filename, ext);

  try {
    // Create WebP version
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(path.join(outputPath, `${nameWithoutExt}.webp`));

    // Create optimized original format version
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFormat(ext.slice(1), { quality: 80 })
      .toFile(path.join(outputPath, filename));

    console.log(`✓ Optimized ${filename}`);
  } catch (error) {
    console.error(`✗ Failed to optimize ${filename}:`, error.message);
  }
}

async function main() {
  try {
    // Ensure output directory exists
    await ensureDirectoryExists(OUTPUT_DIR);

    // Get all image files
    const files = glob.sync('*.{png,jpg,jpeg,gif,webp}', { cwd: SOURCE_DIR });

    console.log(`Found ${files.length} images to optimize...`);

    // Process each image
    for (const file of files) {
      const inputPath = path.join(SOURCE_DIR, file);
      await optimizeImage(inputPath, OUTPUT_DIR);
    }

    console.log('\nOptimization complete! 🎉');
    console.log(`Optimized images are in: ${OUTPUT_DIR}`);
    console.log('\nNext steps:');
    console.log('1. Review the optimized images');
    console.log('2. Update your project data to use the new image paths');
    console.log('3. Consider updating image paths in your code to use .webp versions');

  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

main(); 