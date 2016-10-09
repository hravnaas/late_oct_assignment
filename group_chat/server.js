// Import required modules.
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var debug = true;
// TODO: Do we need this?
var clients = {}
var chat_history = [];

// Helper functions
function log(text)
{
  if(debug)
    console.log("DEBUG: " + text);
}

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(request, response)
{
  response.render("index");
});

var server = app.listen(8000);

// Listen for socket events.
var io = require('socket.io').listen(server);

// Handle connection events.
io.sockets.on('connection', function(socket)
{
  // When a new connection comes in, send it the full chat history.
  // TODO: History is fake for now.
  socket.emit('chat_history', { chats : chat_history });

  // TODO: HANDLING ORDERING of chat messages


  // Handle incoming chat message.
  socket.on("chat_message", function(chat)
  {
    // Broadcast the new chat message to everyone.
    io.emit("append_chat_message", chat);

    // Store the new chat message in the chat history.
    chat_history.push( { name : chat.name, message : chat.message } );

  });
})
