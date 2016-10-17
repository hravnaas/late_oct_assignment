
var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var User = mongoose.model("User");

module.exports =
{
  register : function(req, res)
  {
    // Add a new user.
    var user = new User(
      {
        // TODO: Add validation here?
        // TODO: passwd and confirmed passwd much match.
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        birthday : req.body.birthday,
        password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
      });

    User.create(user, function(err, user)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.json({ error : err });
      }
      else
      {
        // All good. Return the new friend to the caller.
        res.json({ user : user });
      }
    });
  },
  login : function(req, res)
  {
    //var isSame = bcrypt.compareSync(req.body.password, encrypted_password);
    User.findOne( { email : req.body.email }, function(err, user){
      if(err || user == undefined)
      {
        console.log("ERROR: " + err);
        res.json({ user : { abc : "def" } });
      }
      else
      {
        // Found user. Check if the supplied password matches.
        console.log("Password from user: " + req.body.password);
        console.log("Password from db: " + user.password);

        if(bcrypt.compareSync(req.body.password, user.password))
        {
          console.log("Password matches.");
          res.json({ user : user });
        }
        else
        {
          console.log("Password does NOT match.");
          res.send("Bad password, stupid");
        }
      }
    } );
  }
}
