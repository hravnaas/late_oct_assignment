

app.factory('usersFactory', ['$http', function($http)
{
  // The currently logged in user.
  var user = {};

  function UsersFactory()
  {
    var _this = this;

    // Add a new user.
    this.register = function(newUser, callback)
    {
      $http.post('/friends/register', newUser)
        .then(function(returned_data)
        {
          // Set the new user as the logged in user.
          // ValidationError: Email failed validation. Please enter a valid email address.
          if(returned_data.data.error)
          {
            // TODO: Build up JSON object with errors
            // and return.
          }

          user = returned_data.data.user;
          if(typeof(callback) == 'function')
          {
            callback(user);
          }
        },
        function(err)
        {
          console.log(err);
        });
    };

    // Log in an existing user.
    this.login = function(loginUser, callback)
    {
      $http.post('/friends/login', loginUser)
        .then(function(returned_data)
        {
          user = returned_data.data.user;
          if(typeof(callback) == 'function')
          {
            callback(returned_data.data.user);
          }
      });
    };

    // Log out the current user.
    this.logout = function(callback)
    {
      user = {};
      if(typeof(callback) == 'function')
      {
        callback(user);
      };
    };

    this.isLoggedIn = function(callback)
    {
      if(typeof(callback) == 'function')
      {
        callback(user);
      };
      return user.email !== undefined;
    };
  }

  return new UsersFactory();
}]);
