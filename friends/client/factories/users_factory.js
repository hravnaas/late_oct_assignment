

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
          if(returned_data.data.errors)
          {
            callback({ errors : returned_data.data.errors });
          }
          else
          {
            user = returned_data.data.user;
            if(typeof(callback) == 'function')
            {
              callback({ user : user });
            }
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
          if(returned_data.data.errors)
          {
            callback({ errors : returned_data.data.errors });
          }
          else
          {
            user = returned_data.data.user;
            if(typeof(callback) == 'function')
            {
              callback({ user : user });
            }
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

    // after below, CREATE ROUTE IN SERVER then goes to server controller.
    // if(req.session.user)
    //   res.json({user: req.session.user});
    // else {
    //   res.json({user: null});
    // }

    // for logout, have a /logout route in the server backend.
    // logout : function(req, res){
    //   req.session.destroy();
    //   res.json({ done : "done"});
    // Ray did: res.redirect('/');
    // };

    // this code stays here. Above code goes in server controller for user/session.
    // this.checkUser = function(callback){
    //   $http.get("/checkUser")
    //     .then(function(data){
    //       callback(data.data);
    //     })

    //}
  }

  return new UsersFactory();
}]);
