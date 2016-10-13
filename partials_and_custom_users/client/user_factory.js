// Set up the factory
app.factory('userFactory', ['$http', function($http){
  var factory = {};

  // Factory methods
  var users =
  [
    // static users to make development easier.
    { first_name : "Hans", last_name : "Ravnaas", language : "Pascal" },
    { first_name : "Doyle", last_name : "Ravnaas", language : "C" },
    { first_name : "Malcom", last_name : "Cronk", language : "Meow" }
  ];

  // Add a user
  factory.create = function(user)
  {
    if(user && user.first_name && user.last_name)
      users.push(user);
  }

  // Delete a user
  factory.delete = function(userToDelete, callback)
  {
    for(var i = 0; i < users.length; i++)
    {
        if(userToDelete === users[i])
          users.splice(i, 1);
    }

    callback(users);
  };

  // Show a user.
  factory.show = function(user)
  {
    // Not implemented
  }

  // Return all users by invoking the callback and passing the users object.
  factory.index = function(callback)
  {
    callback(users);
  };

  return factory;
}]);
