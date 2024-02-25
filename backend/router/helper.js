const fs = require('node:fs');
const JSZip = require('jszip');
const path = require('node:path');

const zip = new JSZip();

const createFile = (name, content) => {
  fs.writeFile(name, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('generated')
    }
  });
}

const createFolder = (name) => {
  fs.mkdir(name, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('generated')
    }
  });

}

const zipFolder = (structure, zipName, projectName) => {

  const rootDir = path.dirname(require.main.filename);
  const destDir = path.join(rootDir, 'generatedStacks' , projectName);

  try {
    structure.forEach((fileData) => {
      zip.file(path.join(destDir, fileData.dirname, fileData.filename), fileData.content);
    });
  
    const files = structure.map(fileData => fileData.filename);
    const myzipfolder = zip.folder("files");
  
    for (const image of files) {
      const imageData = fs.readFileSync(image);
      myzipfolder.file(image, imageData);
    }
  
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream(zipName))
      .on('finish', function () {
        console.log(`Zip written to ${zipName}`);
      });
  
  } catch (err) {
    console.error(err)
  }
}


module.exports = { createFile, createFolder, zipFolder };


// createFile('myfile.jsx', `import React from "react"`);