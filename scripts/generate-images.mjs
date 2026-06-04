import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, '..', 'app', 'zama_shange_logo.png');
const outputDir = path.join(__dirname, '..', 'app');

async function generateImages() {
  console.log('Generating images...');

  // Load the logo
  const logoBuffer = await sharp(logoPath).toBuffer();

  // Generate OG Image (1200x630)
  await sharp(logoBuffer)
    .resize(1200, 630, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(outputDir, 'og-image.png'));
  console.log('Created og-image.png (1200x630)');

  // Generate Apple Touch Icon (180x180)
  await sharp(logoBuffer)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(outputDir, 'apple-icon.png'));
  console.log('Created apple-icon.png (180x180)');

  console.log('All images generated successfully!');
}

generateImages().catch(console.error);