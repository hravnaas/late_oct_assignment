var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Define the Animal schema for Mongoose.
mongoose.connect("mongodb://localhost/mongoose_dashboard");
var AnimalSchema = new mongoose.Schema(
  {
    name: String,
    short_desc: String
  }
);

mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Handle incoming route requests.
// Show all animals.
app.get('/', function(req, res)
{
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
});

// NOTE: Must catch this route BEFORE '/animals/:id'
// Direct user to page for adding a new animal.
app.get('/animals/new', function(req, res)
{
  res.render('new_animal');
});

// Add a new animal.
app.post('/animals/new', function(req, res)
{
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
});

// Show the requested animal.
app.get('/animals/:id', function(req, res)
{
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
});

// Show the requested animal so that it can be edited.
app.get('/animals/:id/edit', function(req, res)
{
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
});

// Show the requested animal.
app.post('/animals/:id', function(req, res)
{
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
});

// Delete the requested animal from the database.
app.get('/animals/:id/destroy', function(req, res)
{
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
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
