
var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var User = mongoose.model("User");

module.exports =
{
  register : function(req, res)
  {
    // Validate the new user's confirmed password.
    if(req.body.password !== req.body.cpassword)
    {
      req.session.destroy();
      var err =
      {
        errors : { password : { message : "'Password' and 'Confirmed Password' don't match.", value : req.body.cpassword } },
        message : "Bad passwords",
        name: Error
      };
      res.json({ errors : err });
    }

    // Add a new user.
    var user = new User(
    {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      birthday : req.body.birthday,
      password : req.body.password
    });

    User.create(user, function(err, user)
    {
      if(err)
      {
        req.session.destroy();
        console.log("ERROR: " + err);
        res.json({ errors : err });
      }
      else
      {
        // All good. Return the new user to the caller.
        req.session.user = user;
        req.session.save();
        res.json({ user : user });
      }
    });
  },
  login : function(req, res)
  {
    // TODO: BUILD LOGIN AGAIN TO ONLY CARE ABOUT USER NAME
    // AND DON'T DO A SEPARATE REGISER.
    User.findOne( { email : req.body.email }, function(err, user){
      if(err)
      {
        console.log("ERROR: " + err);
        req.session.destroy();
        res.json({ errors : err });
      }
      else if(user == undefined)
      {
        // TODO: If only caring about email, we could create the user
        // here if it wasn't found.
        // The email address was not found.
        req.session.destroy();
        var err =
        {
          errors : { email : { message : "Unknown email address", value : req.body.email } },
          message : "Failed login",
          name: Error
        };
        res.json({ errors : err });
      }
      else
      {
        // Found user. Check if the supplied password matches.
        if(bcrypt.compareSync(req.body.password, user.password))
        {
          req.session.user = user;
          req.session.save();
          res.json({ user : user });
        }
        else
        {
          req.session.destroy();
          var err =
          {
            // Displaying the password to the user is obviously bad practice.
            errors : { password : { message : "Bad password", value : req.body.password } },
            message : "Failed login",
            name: Error
          };
          res.json({ errors : err });
        }
      }
    });
  },
  logout : function(req, res)
  {
    req.session.destroy();
    res.json({ user : null });
  },
  // Indicates whether a user is logged in by either returning
  // a valid user object or returning null meaning no one is logged in.
  getLoggedInUser : function(req, res)
  {
    if(req.session.user)
      res.json({ user : req.session.user });
    else
      res.json({ user: null });
  }
}
