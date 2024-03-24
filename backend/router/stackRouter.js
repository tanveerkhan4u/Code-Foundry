const express = require('express');
const { createFile, createFolder, zipFolder } = require('./helper');
const path = require('path');

const router = express.Router();

const createStackFiles = (structure, projectName, cb) => { 
  const rootDir = path.dirname(require.main.filename);
  const destDir = path.join(rootDir, 'generatedStacks' , projectName);
  console.log(destDir);

  structure.forEach((fileData) => {
    createFolder(path.join(destDir, fileData.dirname));
    createFile(path.join(destDir,fileData.dirname, fileData.filename), fileData.content);
  });
  // createFolder(path.join(rootDir, 'zipFiles', projectName));
  zipFolder(structure, path.join(path.join(rootDir, 'zipFiles'), `${projectName}.zip`), projectName, cb);
}

router.post('/generate', (req, res) => {
  const {projectName, selStack} = req.body;
  
  const {structure, name} = selStack;

  console.log(structure);
  createStackFiles(structure, projectName, (zipFilename) => {
    res.status(200).json({zipFilename});
  });
});

module.exports = router;





