var mongoose = require("mongoose");
var Animal = mongoose.model("Animal");


module.exports =
{
  get_all : function(req, res)
  {
    // Show all animals.
    Animal.find({}, function(err, animals)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to retrieve the animals from the database.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.render("index", { animals: animals });
      }
    });
  },
  enter_new : function(req, res)
  {
    // NOTE: Must catch this route BEFORE '/animals/:id'
    // Direct user to page for adding a new animal.
    res.render('new_animal');
  },
  new : function(req, res)
  {
    // Add a new animal.
    var animal = new Animal({ name: req.body.name, short_desc: req.body.short_desc });
    animal.save(function(err)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to save animal '" + req.body.name + "' to the database.");
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
    // Show the requested animal.
    Animal.findById(req.params.id , function(err, animal)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to get animal with id '" + req.params.id +  "' from the database'.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.render("animal", { animal: animal });
      }
    });
  },
  enter_update : function(req, res)
  {
    // Show the requested animal so that it can be edited.
    Animal.findById(req.params.id , function(err, animal)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to get animal with id '" + req.params.id +  "' from the database'.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.render("edit_animal", { animal: animal });
      }
    });
  },
  update : function(req, res)
  {
    // Update the requested animal.
    console.log("req.body: " + req.body)
    var updatedAnimal =
    {
      name : req.body.name,
      short_desc : req.body.short_desc
    };

    Animal.update( { _id : req.params.id }, updatedAnimal, function(err, animal)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to update animal with id '" + req.params.id +  "'.");
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
    // Delete the requested animal from the database.
    Animal.remove( { _id : req.params.id }, function(err, animal)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to delete animal with id '" + req.params.id +  "' from the database'.");
      }
      else
      {
        // Database delete was successful. Send the user back to the home page.
        res.redirect("/");
      }
    });
  }
}
