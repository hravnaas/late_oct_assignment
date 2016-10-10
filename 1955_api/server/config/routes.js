var mongoose = require("mongoose");
var peoples = require("../controllers/peoples.js");
var bodyParser = require('body-parser');

// Handle incoming route requests.
module.exports = function(app)
{
  app.use(bodyParser.urlencoded({ extended: true }));

  // Show all people.
  app.get('/', function(req, res)
  {
    peoples.get_all(req, res);
  });

  // Add a new person
  app.get('/people/new/:name', function(req, res)
  {
    peoples.new(req, res);
  });

  // Delete the requested person from the database.
  app.get('/people/remove/:name', function(req, res)
  {
    peoples.delete(req, res);
  });

  // Show the requested person.
  app.get('/people/:name', function(req, res)
  {
    peoples.show(req, res);
  });
}
