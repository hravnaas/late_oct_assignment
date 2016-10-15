

app.factory('friendsFactory', ['$http', function($http)
{
  var friends = [];
  var friend = {};

  function FriendsFactory()
  {
    var _this = this;

    // Add a new friend.
    this.create = function(newfriend, callback)
    {
      $http.post('/friends', newfriend)
        .then(function(returned_data)
        {
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data.friend);
          }
      });
    };

    // Update an existing friend.
    this.update = function(friend, callback)
    {
      $http.put('/friends/' + friend.id, friend)
        .then(function(returned_data)
        {
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data.friend);
          }
      });
    };

    // Get all the friends.
    this.index = function(callback)
    {
      $http.get('/friends')
        .then(function(returned_data)
        {
          friends = returned_data.data.friends;
          callback(friends);
        });
    };

    // Delete a friend.
    this.delete = function()
    {
      $http.delete('/friends/' + friend.id)
        .then(function(returned_data)
        {
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data);
          }
      });
    };

    // Get the specified friend.
    this.show = function(id)
    {
      $http.get('/friends/' + id)
        .then(function(returned_data)
        {
          friend = returned_data.data.friend;
          callback(friend);
        });
    };

    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback)
    {
      callback(friends);
    };

    // Get the friend with the specified ID.
    this.getFriend = function(id, callback)
    {
      friend = null;
      for(var i = 0; i < friends.length; i++)
      {
        if(friends[i].id === id)
        {
          friend = friends[i];
          break;
        }
      }

      callback(friend);
    };
  }

  return new FriendsFactory();
}]);
