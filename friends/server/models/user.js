
var mongoose = require('mongoose');

// Create the user schema
var UserSchema = new mongoose.Schema(
  {
    // TODO: Add more validation
    first_name :{
                  type: String,
                  required: [true, "first name is required"],
                  trim: true,
                  minlength: 2,
                  maxlength: 50
                },
    last_name : {
                  type: String,
                  required: [true, "last name is required"],
                  trim: true,
                  minlength: 2,
                  maxlength: 50
                },
    // TODO: check confirmed password
    password : String,
    email : {
              type : String,
              trim: true,
              unique : true,
              validate:
              {
                validator : function(value)
                {
                  return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(value);
                },
                message: "Email failed validation. Please enter a valid email address."
              }
            },
    birthday : Date,
  },
  {
    timestamps: true
  }
);

// Register the schema as a model.
var User = mongoose.model('User', UserSchema);
