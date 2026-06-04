import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, '..', 'app', 'zama_shange_logo.png');
const appDir = path.join(__dirname, '..', 'app');
const publicDir = path.join(__dirname, '..', 'public');

function createIco(pngEntries) {
  const headerSize = 6;
  const directorySize = 16 * pngEntries.length;
  let offset = headerSize + directorySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngEntries.length, 4);

  const directory = Buffer.alloc(directorySize);

  pngEntries.forEach(({ size, buffer }, index) => {
    const entryOffset = index * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, entryOffset);
    directory.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);
    directory.writeUInt8(0, entryOffset + 2);
    directory.writeUInt8(0, entryOffset + 3);
    directory.writeUInt16LE(1, entryOffset + 4);
    directory.writeUInt16LE(32, entryOffset + 6);
    directory.writeUInt32LE(buffer.length, entryOffset + 8);
    directory.writeUInt32LE(offset, entryOffset + 12);
    offset += buffer.length;
  });

  return Buffer.concat([header, directory, ...pngEntries.map(({ buffer }) => buffer)]);
}

async function iconPng(logoBuffer, size) {
  return sharp(logoBuffer)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toBuffer();
}

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
    .toFile(path.join(appDir, 'og-image.png'));
  console.log('Created og-image.png (1200x630)');

  // Generate Apple Touch Icon (180x180)
  const appleIcon = await iconPng(logoBuffer, 180);
  await fs.writeFile(path.join(appDir, 'apple-icon.png'), appleIcon);
  await fs.writeFile(path.join(publicDir, 'apple-icon.png'), appleIcon);
  console.log('Created apple-icon.png (180x180)');

  const favicon32 = await iconPng(logoBuffer, 32);
  const favicon48 = await iconPng(logoBuffer, 48);
  const icon192 = await iconPng(logoBuffer, 192);
  const icon512 = await iconPng(logoBuffer, 512);
  const favicon = createIco([
    { size: 32, buffer: favicon32 },
    { size: 48, buffer: favicon48 },
  ]);

  await fs.writeFile(path.join(appDir, 'favicon.ico'), favicon);
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), favicon);
  await fs.writeFile(path.join(publicDir, 'favicon-32x32.png'), favicon32);
  await fs.writeFile(path.join(publicDir, 'favicon-48x48.png'), favicon48);
  await fs.writeFile(path.join(publicDir, 'icon-dark-32x32.png'), favicon32);
  await fs.writeFile(path.join(publicDir, 'icon-light-32x32.png'), favicon32);
  await fs.writeFile(path.join(publicDir, 'icon-192x192.png'), icon192);
  await fs.writeFile(path.join(publicDir, 'icon-512x512.png'), icon512);
  await fs.writeFile(path.join(appDir, 'icon.png'), icon512);
  console.log('Created favicon.ico and PNG icon sizes');

  const manifest = {
    name: 'Zama Shange',
    short_name: 'Zama Shange',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  };
  await fs.writeFile(
    path.join(publicDir, 'site.webmanifest'),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
  console.log('Created site.webmanifest');

  console.log('All images generated successfully!');
}

generateImages().catch(console.error);
