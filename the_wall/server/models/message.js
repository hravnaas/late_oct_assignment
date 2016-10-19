
var mongoose = require('mongoose');

// This is needed when using associations.
Schema = mongoose.Schema;

// Define the Message schema.
var MessageSchema = new mongoose.Schema(
  {
    _user : { type : Schema.Types.ObjectId, ref: "UserBasic" },
    text: { type : String, required : true, minlength : 1 },
    comments : [{ type : Schema.Types.ObjectId, ref: "Comment" } ]
  },
  {
    timestamps : true
  }
);

// Define the Comment schema.
var CommentSchema = new mongoose.Schema(
  {
    _message : { type : Schema.Types.ObjectId, ref: "Message" },
    _user : { type : Schema.Types.ObjectId, ref: "UserBasic" },
    text: { type : String, required : true, minlength : 1 }
  },
  {
    timestamps : true
  }
);

// Start using the schemas.
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

//var Message = mongoose.model('Message')
//var Comment = mongoose.model('Comment')
