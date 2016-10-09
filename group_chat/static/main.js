$(document).ready(function()
{
  // Get the user name from the client.
  var name = prompt("What is your name, future group chatter?");

  // Connect to the socket
  var socket = io.connect( { name : name });

  // Handle user sending a chat message to the server.
  $('#send_btn').click(function ()
  {
    var chat_message = $("#chat").val();
    socket.emit("chat_message", { name : name, message : chat_message } );
  });

  // Add entire chat history to chat window.
  // This is needed only when a client comes online.
  socket.on('chat_history', function(all_chats)
  {
    if(all_chats)
    {
      var chats = $('#chats');
      var previous_chats = all_chats.chats;
      for(var i = 0; i < previous_chats.length; i++)
      {
        $(chats).append("<p>" + previous_chats[i].name + " : " + previous_chats[i].message + "</p>");
      }
    }
  });

  // Append a single chat message.
  socket.on('append_chat_message', function(chat)
  {
    $('#chats').append("<p>" + chat.name + " : " + chat.message + "</p>");
  });
});
