import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    name: 'd2c.jpg',
    url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'bfsi.jpg',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'edtech.jpg',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'smb.jpg',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'enterprise.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'hero-merchant.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'hero-support.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
};

async function run() {
  const targetDir = path.resolve('public/images');
  for (const img of images) {
    const dest = path.join(targetDir, img.name);
    console.log(`Downloading ${img.name}...`);
    try {
      await download(img.url, dest);
      console.log(`Saved ${img.name}`);
    } catch (e) {
      console.error(`Error on ${img.name}:`, e.message);
    }
  }
}

run();
