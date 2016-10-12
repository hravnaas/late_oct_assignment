var col = require("../node_modules/colornames/index.js");
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));

app.get('/', function(req, res)
{
  console.log("/ route hit");
  var colors = col.get.all();
  console.log("colors: " + colors);
  res.json(colors);
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
