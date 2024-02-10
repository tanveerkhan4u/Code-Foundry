const { Schema, model} = require('../connection');

const myschema = new Schema({
  email: String,
  name: String,
  subject: String,
  message : String
});

module.exports = model('contact', myschema);