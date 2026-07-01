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

    process.stdout.write(`✓ Optimized ${filename}\n`);
  } catch (error) {
    process.stderr.write(`✗ Failed to optimize ${filename}: ${error.message}\n`);
    process.exitCode = 1;
  }
}

async function main() {
  try {
    // Ensure output directory exists
    await ensureDirectoryExists(OUTPUT_DIR);

    // Get all image files
    const files = glob.sync('*.{png,jpg,jpeg,gif,webp}', { cwd: SOURCE_DIR });

    process.stdout.write(`Found ${files.length} images to optimize...\n`);

    // Process each image
    for (const file of files) {
      const inputPath = path.join(SOURCE_DIR, file);
      await optimizeImage(inputPath, OUTPUT_DIR);
    }

    process.stdout.write('\nOptimization complete! 🎉\n');
    process.stdout.write(`Optimized images are in: ${OUTPUT_DIR}\n`);
    process.stdout.write('\nNext steps:\n');
    process.stdout.write('1. Review the optimized images\n');
    process.stdout.write('2. Update your project data to use the new image paths\n');
    process.stdout.write('3. Consider updating image paths in your code to use .webp versions\n');

  } catch (error) {
    process.stderr.write(`Error during optimization: ${error.message}\n`);
    process.exit(1);
  }
}

main(); 