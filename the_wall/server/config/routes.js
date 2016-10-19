// Import requirements.
var mongoose = require("mongoose");
var messages = require("../controllers/messages.js");
var users = require("../controllers/users.js");

// Handle incoming route requests.
module.exports = function(app) {
    ////////// Login & Registration - start //////////

    app.post('/messages/login', function(req, res) {
      users.login(req, res);
    });

    app.get('/messages/logout', function(req, res) {
      users.logout(req, res);
    });

    app.get('/messages/getLoggedInUser', function(req, res) {
      users.getLoggedInUser(req, res);
    });

    ////////// Login & Registration - end //////////


    ////////// The Wall Application //////////

    // Get all posts.
    app.get('/messages', function(req, res) {
      messages.index(req, res);
    });

    // Add a new post.
    app.post('/messages/new', function(req, res) {
      messages.new(req, res);
    });

    // Comment on a post.
    app.post('/messages/:id/comment', function(req, res) {
      console.log("HERE")
      messages.comment(req, res);
    });
}
