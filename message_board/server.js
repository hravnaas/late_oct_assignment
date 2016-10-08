
// Import required modules.
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// Configure Express.
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Connect to the database.
mongoose.connect("mongodb://localhost/message_board");

Schema = mongoose.Schema;

// Define the Message schema.
var MessageSchema = new mongoose.Schema(
  {
    name: { type : String, required : true, minlength : 4 },
    text: { type : String, required : true },
    comments : [{ type : Schema.Types.ObjectId, ref: "Comment" } ]
  },
  {
    timestamps : true
  }
);

// Define the Comment schema.
var CommentSchema = new mongoose.Schema(
  {
    _message : { type : Schema.Types.ObjectId, ref: "Message"  },
    name: { type : String, required : true, minlength : 4 },
    text: { type : String, required : true }
  },
  {
    timestamps : true
  }
);

// Start using the schemas.
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')

// Handle incoming route requests.
// Retrieve all messages and associated comments.
app.get('/', function(req, res)
{
  Message.find()
    .populate('comments')
    .exec(function(err, messages)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.send("Unable to retrieve the messages from the database.");
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.render("index", { messages: messages });
      }
    })
});

// Add a new message.
app.post('/messages/new', function(req, res)
{
  var message = new Message(req.body);
  message.save(function(err)
  {
    if(err)
    {
      console.log("ERROR: " + err);
      res.send("Unable to save message '" + req.body.text + "' to the database.");
    }
    else
    {
      // All good. Take user back to the home page.
      res.redirect('/');
    }
  });
});

// Add comment to post.
app.post('/messages/:id/comment', function(req, res)
{
  // First find the message the comment is for.
  Message.findById(req.params.id, function(err, message)
  {
    if(err)
    {
      console.log("ERROR: " + err);
      res.send("Unable to find the message with id '" + req.params.id +  "'.");
    }
    else
    {
      // We found the message the comments is for. Create a comment.
      var comment = new Comment(req.body);
      comment._message = message._id;
      message.comments.push(comment);
      comment.save(function(err)
      {
          if(err)
          {
            console.log("ERROR: " + err);
            res.send("Unable to save the comment.");
          }
          else
          {
            // We were able to save the comment.
            // Now attempt to update the message as well.
            message.save(function(err)
            {
              if(err)
              {
                console.log("ERROR: " + err);
                res.send("Unable to save the message with the new comment.");
              }
              else
              {
                // Magically, everything worked. Redirect user back to home page.
                res.redirect("/");
              }
            })

          }
      })
    }
  });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
