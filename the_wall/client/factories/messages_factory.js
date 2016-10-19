

app.factory('messagesFactory', ['$http', function($http)
{
  var posts = [];

  function MessagesFactory()
  {
    var _this = this;

    // Get all the posts and comments.
    this.index = function(callback)
    {
      $http.get('/messages')
        .then(function(returned_data)
        {
          posts = returned_data.data.messages;
          callback(posts);
        });
    };

    // Add a new post.
    this.new = function(newMessage, callback)
    {
      $http.post('/messages/new', newMessage)
        .then(function(returned_data)
        {
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data.message);
          }
      });
    };

    // Comment on a specified message.
    this.comment = function(newComment, callback)
    {
      $http.post('/messages/' + newComment.msgID + "/comment", newComment)
        .then(function(returned_data)
        {
          callback(returned_data.data.comment);
        });
    };
  }

  return new MessagesFactory();
}]);
