Group Chat steps:

Ordered:
* Server indirectly prompts user for name.
* Client connects to server and sends "user_connect" event passing name and ID?
* Server responds to client only and passes entire chat history.
* Client displays chat history.
* Server listens for "chat_message" event.
* Server broadcasts new message to everyone including originating client.

By origin:

Server indirectly prompts user for name.
* Client connects to server and sends "user_connect" event passing name and ID?
* Client displays chat history.

* Server listens for "user_connect" event.
* Server responds to client only and passes entire chat history.

* Server listens for "chat_message" event.
* Server broadcasts new message to everyone including originating client.
