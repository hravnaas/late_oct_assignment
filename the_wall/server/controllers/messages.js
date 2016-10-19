
var mongoose = require("mongoose");
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

module.exports =
{
  // Get all the messages and their comments
  index : function(req, res)
  {
    // Get all the messages.
    Message.find()
    //.populate('comments')
    .populate(
      {
        path : "comments",
        populate : { path : "_user" }
      }
    )
    .populate('_user')
    .exec(function(err, messages)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.json({ errors : err });
      }
      else
      {
        // Database query was successful. Send the result set on to the client.
        res.json({ messages: messages });
      }
    })
  },

  // Add a new message.
  new : function(req, res)
  {
    console.log("Body user id: " + req.body.userID);
    var message = new Message(
    {
      // Associate the message with the user posting it.
      _user : req.body.userID,
      text : req.body.text,
      comments : []
    });

    message.save(function(err)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.json({ errors : err });
      }
      else
      {
        // All good.
        res.json({ message : req.body });
      }
    });
  },

  // Comment on an existing message.
  comment : function(req, res)
  {
    // First find the message the comment is for.
    Message.findById(req.params.id, function(err, message)
    {
      if(err)
      {
        console.log("ERROR: " + err);
        res.json({ errors : err });
      }
      else
      {
        // We found the message the comments is for. Create a comment.
        console.log(req.body.userID);
        console.log(req.body.msgID);
        console.log(req.body.text);
        var comment = new Comment(
          {
            _user : req.body.userID,
            _message : req.body.msgID,
            text : req.body.text
          }
        );
        // "Link" the comment to the message and user it's related to.
        message.comments.push(comment);
        comment.save(function(err)
        {
            if(err)
            {
              console.log("ERROR: " + err);
              res.json({ errors : err });
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
                  res.json({ errors : err });
                }
                else
                {
                  // Magically, everything worked.
                  // Return the comment to the caller.
                  res.json({ comment : req.body });
                }
              })

            }
        })
      }
  });
  }
}
