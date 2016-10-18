
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Set max and min allowed birtdays.
var minDate = new Date();
minDate.setDate(minDate.getDate() - 36525); // 100 years ago.
var maxDate = new Date();
maxDate.setDate(maxDate.getDate() - 730); // 2 years ago.

// Create the user schema
//var Schema = mongoose.Schema; if using associations!!!
var UserSchema = new mongoose.Schema(
  {
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
    password :  {
                  type: String,
                  required: [true, "password is required"],
                  minlength: 8,
                  maxlength: 32,
                  validate:
                  {
                    validator : function(value)
                    {
                      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
                    },
                    message: "Password failed validation, you must have at least 1 number, uppercase and special character."
                  }
                },
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
    birthday : {
                type : Date,
                required: [true, "Birthday is required"],
                min : minDate,
                max : maxDate
               }
  },
  {
    timestamps: true
  }
);

// Function to encrypt a string, such as a password.
UserSchema.methods.encryptPassword = function(clearPassword){
  return bcrypt.hashSync(clearPassword, bcrypt.genSaltSync(8));
}

// Function below will run before saving and encrypt the password.
// Model validation will happen BEFORE below function runs.
UserSchema.pre('save', function(done)
{
  this.password = this.encryptPassword(this.password);

  if(typeof(done) == 'function')
  {
    done();
  };
});

// Register the schema as a model.
var User = mongoose.model('User', UserSchema);
