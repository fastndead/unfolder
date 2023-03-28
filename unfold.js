#!/usr/bin/node

const fs = require('fs');
const path = require('path');

if (process.argv.length > 1) {
  throw 'Too many arguments'
}

if (process.argv[0] && !fs.existsSync(process.argv[0])) {
  throw 'You have provided an invalid path'
}
const directoryPath = process.argv[0] || __dirname;

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error getting directory contents:', err);
    return;
  }
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      fs.readdir(filePath, (err, subFiles) => {
        if (err) {
          console.log('Error getting subdirectory contents:', err);
          return;
        }
        subFiles.forEach((subFile) => {
          const subFilePath = path.join(filePath, subFile);
          const newFilePath = path.join(directoryPath, subFile);
          fs.rename(subFilePath, newFilePath, (err) => {
            if (err) {
              console.log('Error moving file:', err);
              return;
            }
            console.log(`Moved file ${subFilePath} to ${newFilePath}`);
          });
        });
      });
    }
  });
});
