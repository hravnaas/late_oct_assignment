
var mongoose = require('mongoose');

// Create the user schema
var UserSchema = new mongoose.Schema(
  {
    // TODO: Add validation
    first_name : String,
    last_name : String,
    password : String,
    email : { type : String, unique : true },
    //password_confirm
    birthday : Date,
    // created_at : { type : Date, default : Date.now}
  },
  {
    timestamps: true
  }
);

// Register the schema as a model.
var User = mongoose.model('User', UserSchema);
