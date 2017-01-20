var express = require('express');
var bodyParser = require('body-parser');
var Person = require('./models/person.js');

var app = express();

app.use(bodyParser.urlencoded({extend: false}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.get('/', function(req, res){
  var people = Person.find({
    first_name: "Julie"
  }, function(err, people){
    res.send(people);
  });
});

app.listen(3000);
