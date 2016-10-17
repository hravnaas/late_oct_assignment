app.controller('newController',
  ['$scope',
  'friendsFactory',
  '$location',
  'usersFactory',
  function($scope, friendsFactory, $location, usersFactory)
  {
    $scope.sortType = "last_name";

    $scope.friends = [];
    $scope.friend = {};

    var index = function()
    {
      friendsFactory.index(function(returnedData)
      {
        $scope.friends = returnedData;
      });
    };

    $scope.create = function()
    {
      var friend = $scope.newFriend;
      if(friend.first_name && friend.last_name)
      {
        friendsFactory.create(friend, function(friend)
        {
          $location.url("/friends/index");
        });
      }
      else
        $location.url("/friends/new");
    };

    $scope.redirect = function(destination)
    {
      $location.url(destination);
    }

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

    // Check if user is logged in.
    var loggedIn = usersFactory.isLoggedIn(function(user)
    {
      $scope.user = user;
    });

    if(!loggedIn)
      $location.url("/friends/login");

    // Get all our users when the controllers loads after the user is logged in.
    index();
  }]);
