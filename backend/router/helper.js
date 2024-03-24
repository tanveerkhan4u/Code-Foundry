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

const zipFolder = (structure, zipName, projectName, cb) => {

  const rootDir = path.dirname(require.main.filename);
  const destDir = path.join(rootDir, 'generatedStacks' , projectName);
  console.log(destDir);
  try {
    for(let fileData of structure){
      console.log(path.join(destDir, fileData.dirname, fileData.filename));
      zip.file(path.join(destDir, fileData.dirname, fileData.filename), fileData.content);
      console.log('create zip');
    }
    // structure.forEach((fileData) => {
    // });
  
    const files = structure.map(fileData => path.join( 'generatedStacks' , projectName, fileData.dirname, fileData.filename));
    const myzipfolder = zip.folder("stackFiles");
  
    for (const image of files) {
      const imageData = fs.readFileSync(image);
      myzipfolder.file(image, imageData);
    }
  
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream(zipName))
      .on('finish', function () {
        console.log(`Zip written to ${zipName}`);
        cb(projectName+'.zip')
      });
  
  } catch (err) {
    console.error(err)
  }
}

module.exports = { createFile, createFolder, zipFolder };


// createFile('myfile.jsx', `import React from "react"`);