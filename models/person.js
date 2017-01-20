var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  ip_address: String
}, {
  collection: 'people'
});

var Person = mongoose.model('Person', personSchema);
module.exports = Person;
