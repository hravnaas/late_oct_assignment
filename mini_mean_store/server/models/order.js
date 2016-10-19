
var mongoose = require('mongoose');

// Create the schema
var OrderSchema = new mongoose.Schema(
  {
    _user : { type : Schema.Types.ObjectId, ref: "UserBasic" },
    _product : { type : Schema.Types.ObjectId, ref: "UserBasic" },
    quantity : { type : Number, required : true, min : 1 }
  },
  {
    timestamps : true
  }
);

// Register the schema as a model.
var Order = mongoose.model('Order', OrderSchema);
