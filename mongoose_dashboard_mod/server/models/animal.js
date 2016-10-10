// require mongoose
var mongoose = require('mongoose');

// create the schema
var AnimalSchema = new mongoose.Schema(
  {
    name: String,
    short_desc: String
  }
);

// register the schema as a model
var Animal = mongoose.model('Animal', AnimalSchema);
