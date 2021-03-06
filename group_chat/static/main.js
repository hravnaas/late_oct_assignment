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
    socket.emit("chat_message", { name : name, message : chat_message, when : new Date() } );

    // Clear out the chat message
    $("#chat").val("");
  });

  // Add entire chat history to chat window.
  // This is needed only when a client comes online.
  socket.on('chat_history', function(all_chats)
  {
    if(all_chats)
    {
      var previous_chats = all_chats.chats;
      for(var i = 0; i < previous_chats.length; i++)
      {
        addParagraphTag("#chats", previous_chats[i].name, previous_chats[i].message, previous_chats[i].when);
      }
    }
  });

  // Append a single chat message.
  socket.on('append_chat_message', function(chat)
  {
    // Add in the new chat message.
    addParagraphTag("#chats", chat.name, chat.message, chat.when);

    // Update how long it's been since each chat occurred.
    // TODO: Have periodic updates send from server instead
    // to update client even if no activity is taking place?
    $( ".chattime" ).each(function()
    {
      $(this).text($.timeago($(this).attr("time")));
    });

  });

  // Helper function to build paragraph HTML tag with chat entry.
  function addParagraphTag(o, name, message, when)
  {
    var spanTag = "<span class='chattime' time='" + when + "'>" + $.timeago(when) + "</span>";
    $(o).append("<p><b>" + name + "</b> (" + spanTag + ") : <i>" + message + "</i></p>");
  }

});
