const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);



const sourceDir = process.argv[2];
const targetDir = process.argv[3];

async function copyFilesWithExtensions(sourceDir, targetDir, extensions) {
  try {
    const files = await readdir(sourceDir);

    for (const file of files) {
      const fileExtension = path.extname(file).toLowerCase();

      if (extensions.includes(fileExtension)) {
        const sourceFilePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, file);

        await copyFile(sourceFilePath, targetFilePath);
        console.log(`Copied ${file}`);
      }
    }
  } catch (err) {
    console.error('Error reading or copying files:', err);
  }
}

const allowedExtensions = ['.txt', '.jpg'];

copyFilesWithExtensions(sourceDir, targetDir, allowedExtensions);