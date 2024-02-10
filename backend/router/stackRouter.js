const express = require('express');
const { createFile, createFolder } = require('./helper');

const router = express.Router();

const createStackFiles = (structure) => {
  const mainDir = 'generatedStack';

    

}

router.post('/generate', (req, res) => {
  const {name, structure} = req.body;
  console.log(structure);
  res.send('request received!');
});


module.exports = router;





