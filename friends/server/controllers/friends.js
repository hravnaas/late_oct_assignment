
var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

module.exports =
{
  index : function(req, res)
  {
    // Get all the friends.
    Friend.find({}, function(err, friends)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to retrieve friends from the database.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.json({ friends: friends });
      }
    });
  },
  new : function(req, res)
  {
    // Add a new friend.
    // NOTE: If we know the body contains exactly what
    // we need, we can just past req.body to Friend.create directly.
    var friend = new Friend(
      {
        // TODO: Add validation here?
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        birthday : req.body.birthday
      });

    Friend.create(friend, function(err, friend)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to save friend '" + req.body.last_name + "' to the database.");
      }
      else
      {
        // All good. Return the new friend to the caller.
        res.json(friend);
      }
    });
  },
  show : function(req, res)
  {
    // Show the requested friend.
    Friend.findById(req.params.id , function(err, friend)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to get friend with id '" + req.params.id +  "' from the database'.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.json({ friend : friend });
      }
    });
  },
  enter_update : function(req, res)
  {
    // Show the requested friend so that it can be edited.
    Friend.findById(req.params.id , function(err, friend)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to get friend with id '" + req.params.id +  "' from the database'.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.json({ friend: friend });
      }
    });
  },
  update : function(req, res)
  {
    // Update the requested friend.
    var updatedFriend =
    {
      // TODO: Add validation here?
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      birthday : req.body.birthday
    };

    Friend.update( { _id : req.params.id }, updatedFriend, function(err, friend)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to update friend with id '" + req.params.id +  "'.");
      }
      else
      {
        // Database update was successful. Send the user back to the home page.
        res.redirect("/");
      }
    });
  },
  delete : function(req, res)
  {
    // Delete the requested friend from the database.
    Friend.remove( { _id : req.params.id }, function(err, friend)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to delete friend with id '" + req.params.id +  "' from the database'.");
      }
      else
      {
        // Database delete was successful. Send the user back to the home page.
        res.redirect("/");
      }
    });
  }
}
