#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

if (process.argv.length > 3) {
    console.error('Too many arguments');
}

if (process.argv[2] && !fs.existsSync(process.argv[2])) {
    console.error('You have provided an invalid path');
}

const directoryPath = process.argv[2] || './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error getting directory contents:', err);
    return;
  }
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      fs.readdir(filePath, (err, subFiles) => {
        if (err) {
          console.error('Error getting subdirectory contents:', err);
          return;
        }
        subFiles.forEach((subFile) => {
          const subFilePath = path.join(filePath, subFile);
          const newFilePath = path.join(directoryPath, subFile);
          fs.rename(subFilePath, newFilePath, (err) => {
            if (err) {
              console.error('Error moving file:', err);
              return;
            }
            console.error(`Moved file ${subFilePath} to ${newFilePath}`);
          });
        });
      });
    }
  });
});
