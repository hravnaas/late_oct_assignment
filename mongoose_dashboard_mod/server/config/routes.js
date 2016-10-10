var mongoose = require("mongoose");
var animals = require("../controllers/animals.js");
var bodyParser = require('body-parser');

// Handle incoming route requests.
module.exports = function(app)
{
  app.use(bodyParser.urlencoded({ extended: true }));
  // Show all animals.
  app.get('/', function(req, res)
  {
    animals.get_all(req, res);
  });

  // NOTE: Must catch this route BEFORE '/animals/:id'
  // Direct user to page for adding a new animal.
  app.get('/animals/new', function(req, res)
  {
    animals.enter_new(req, res);
  });

  // Add a new animal.
  app.post('/animals/new', function(req, res)
  {
    animals.new(req, res);
  });

  // Show the requested animal.
  app.get('/animals/:id', function(req, res)
  {
    animals.show(req, res);
  });

  // Show the requested animal so that it can be edited.
  app.get('/animals/:id/edit', function(req, res)
  {
    animals.enter_update(req, res);
  });

  // Update the requested animal.
  app.post('/animals/:id', function(req, res)
  {
    animals.update(req, res);
  });

  // Delete the requested animal from the database.
  app.get('/animals/:id/destroy', function(req, res)
  {
    animals.delete(req, res);
  });
}
