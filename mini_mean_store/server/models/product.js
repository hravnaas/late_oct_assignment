
var mongoose = require('mongoose');

// Create the schema
var ProductSchema = new mongoose.Schema(
  {
    name : { type : String, required : true, minlength : 1, trim: true },
    description : { type : String, required : true, minlength : 10, trim: true },
    imageUrl : { type : String, required : true, minlength : 10, trim: true },
    quantity : { type : Number, required : true, min : 0 }
  },
  {
    timestamps : true
  }
);

// Register the schema as a model.
var Product = mongoose.model('Product', ProductSchema);
