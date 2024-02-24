const fs = require('node:fs');
const JSZip = require('jszip');

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

const zipFolder = (files, zipName) => {

  try {
  
    zip.file("myfile.txt", "Hello NodeJS\n");
  
    const files = ["myfile.txt"];
    const myzipfolder = zip.folder("files");
  
    for (const image of files) {
      const imageData = fs.readFileSync(image);
      myzipfolder.file(image, imageData);
    }
  
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream('sample.zip'))
      .on('finish', function () {
        console.log("sample.zip written.");
      });
  
  } catch (err) {
    console.error(err)
  }
}


module.exports = { createFile, createFolder };


// createFile('myfile.jsx', `import React from "react"`);