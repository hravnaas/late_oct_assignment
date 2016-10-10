var mongoose = require("mongoose");
var People = mongoose.model("People");

module.exports =
{
  get_all : function(req, res)
  {
    // Show all people.
    People.find({}, function(err, peoples)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to retrieve all people from the database.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.json(peoples);
      }
    });
  },
  new : function(req, res)
  {
    // Add a new person.
    var people = new People({ name: req.params.name });
    people.save(function(err)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to save person '" + req.params.name + "' to the database.");
      }
      else
      {
        // All good. Take user back to the home page.
        res.redirect('/');
      }
    });
  },
  show : function(req, res)
  {
    // Show the requested person.
    People.find( { name : req.params.name }, function(err, people)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to get person with name '" + req.params.name +  "' from the database'.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.json(people);
      }
    });
  },
  delete : function(req, res)
  {
    // Delete the requested person from the database.
    People.remove( { name : req.params.name }, function(err, people)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to delete person with id '" +  req.params.name +  "' from the database'.");
      }
      else
      {
        // Database delete was successful. Send the user back to the home page.
        res.redirect("/");
      }
    });
  }
}
