
var mongoose = require('mongoose');

// Create the schema
var FriendSchema = new mongoose.Schema(
  {
    first_name : String,
    last_name : String,
    birthday : Date,
    created_at : { type : Date, default : Date.now}
  }
);

// Register the schema as a model.
var Friend = mongoose.model('Friend', FriendSchema);
