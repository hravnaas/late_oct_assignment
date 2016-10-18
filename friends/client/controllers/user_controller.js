app.controller('userController',
  ['$scope',
  'usersFactory',
  '$location',
  function($scope, usersFactory, $location)
  {
    // The currently logged in user.
    $scope.user = {};

    // Register a new user.
    $scope.register = function()
    {
      $scope.user = {};
      usersFactory.register($scope.newUser, function(result)
      {
        // A registration is treated as a registration
        // followed by an implicit login.
        if(result.errors)
        {
          $scope.errors = result.errors;
          $location.url('/friends/login');
        }
        else
        {
          $scope.user = result.user;
          $scope.errors = null;
          $location.url('/friends/index');
        }
      });
    };

    // Log in the user.
    $scope.login = function()
    {
      usersFactory.login($scope.currentUser, function(result)
      {
        if(result.errors)
        {
          $scope.errors = result.errors;
          $location.url('/friends/login');
        }
        else
        {
          $scope.user = result.user;
          $scope.errors = null;
          $location.url('/friends/index');
        }
      });
    };

    // Logs out the current user.
    $scope.logout = function()
    {
      usersFactory.logout(function(user)
      {
        console.log("client user controller: User logged out.");
        $scope.user = user;
        $location.url('/friends/login');
      });
    };

    // todo
    // UsersFactory.checkUser(function(data){
    //   $scope.currentUser = data;
    //});

  }]);
