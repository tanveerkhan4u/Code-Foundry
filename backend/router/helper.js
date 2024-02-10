const fs = require('node:fs');

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

module.exports = { createFile, createFolder };


// createFile('myfile.jsx', `import React from "react"`);