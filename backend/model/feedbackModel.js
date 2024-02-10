const { Schema, model} = require('../connection');

const myschema = new Schema({
  name : "string",
  email : "string",
  rating : "number"
});

module.exports = model('feedback', myschema);