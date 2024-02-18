const express = require('express');
const { createFile, createFolder } = require('./helper');
const path = require('path');

const router = express.Router();

const createStackFiles = (structure, projectName) => { 
  const rootDir = path.dirname(require.main.filename);
  const destDir = path.join(rootDir, 'generatedStacks' , projectName);
  console.log(destDir);

  structure.forEach((fileData) => {
    createFolder(path.join(destDir, fileData.dirname));
    createFile(path.join(destDir,fileData.dirname, fileData.filename), fileData.content);
  });
}

router.post('/generate', (req, res) => {
  const {name, structure} = req.body;
  const projectName = 'myproject';
  // console.log(structure);
  createStackFiles(structure, projectName);
  res.send('request received!');
});


module.exports = router;





