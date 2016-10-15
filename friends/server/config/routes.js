
// Import requirements.
var mongoose = require("mongoose");
var friends = require("../controllers/friends.js");
var bodyParser = require('body-parser');

// Handle incoming route requests.
module.exports = function(app)
{
  // Add a new friend.
  app.post('/friends', function(req, res)
  {
    friends.new(req, res);
  });

  // Update a friend.
  app.put('/friends/:id', function(req, res)
  {
    friends.update(req, res);
  });

  // Get all friends.
  app.get('/friends', function(req, res)
  {
    friends.index(req, res);
  });

  // Delete a friend.
  app.delete('/friends/:id', function(req, res)
  {
    friends.delete(req, res);
  });

  // Show the requested friend.
  app.get('/friends/:id', function(req, res)
  {
    friends.show(req, res);
  });
}
