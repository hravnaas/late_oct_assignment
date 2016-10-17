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
      usersFactory.register($scope.newUser, function(user)
      {
        // A registration is treated as a registration
        // followed by an implicit login.
        $scope.user = user;
        $location.url('/friends/index');
      });
    };

    // Log in the user.
    $scope.login = function()
    {
      usersFactory.login($scope.currentUser, function(user)
      {
        $scope.user = user;
        $location.url('/friends/index');
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
  }]);
