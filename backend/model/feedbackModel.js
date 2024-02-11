const { Schema, model} = require('../connection');

const myschema = new Schema({
  name : "string",
  email : "string",
  message : "string"
});

module.exports = model('feedback', myschema);