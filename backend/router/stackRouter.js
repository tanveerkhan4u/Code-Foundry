const express = require('express');
const { createFile, createFolder } = require('./helper');

const router = express.Router();

const createStackFiles = (structure) => {
  const mainDir = 'generatedStack';

  structure.forEach((fileData) => {
    createFolder(fileData.dirname);
    createFile(fileData.dirname, fileData.filename, fileData.content);
  });

}

router.post('/generate', (req, res) => {
  const {name, structure} = req.body;
  console.log(structure);
  createStackFiles(structure);
  res.send('request received!');
});


module.exports = router;





