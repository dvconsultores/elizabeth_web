import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const publicDir = './public';
const quality = 80;

async function compressImage(filePath) {
  try {
    const ext = filePath.toLowerCase().split('.').pop();
    
    if (ext === 'jpg' || ext === 'jpeg') {
      await sharp(filePath)
        .jpeg({ quality, mozjpeg: true })
        .toFile(filePath + '.tmp');
      
      // Replace original with compressed
      await sharp(filePath + '.tmp').toFile(filePath);
      const fs = await import('fs');
      fs.unlinkSync(filePath + '.tmp');
      
      console.log(`✓ Compressed: ${filePath}`);
    } else if (ext === 'png') {
      await sharp(filePath)
        .png({ quality, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
      
      // Replace original with compressed
      await sharp(filePath + '.tmp').toFile(filePath);
      const fs = await import('fs');
      fs.unlinkSync(filePath + '.tmp');
      
      console.log(`✓ Compressed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Failed to compress ${filePath}:`, error.message);
  }
}

async function compressAllImages() {
  const files = readdirSync(publicDir);
  
  for (const file of files) {
    const filePath = join(publicDir, file);
    
    if (statSync(filePath).isFile()) {
      const ext = file.toLowerCase().split('.').pop();
      if (['jpg', 'jpeg', 'png'].includes(ext)) {
        await compressImage(filePath);
      }
    }
  }
  
  console.log('\n✓ Image compression complete!');
}

compressAllImages();
