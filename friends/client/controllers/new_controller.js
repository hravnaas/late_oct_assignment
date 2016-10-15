app.controller('newController',
  ['$scope',
  'friendsFactory',
  '$location',
  function($scope, friendsFactory, $location)
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
      friendsFactory.create($scope.newFriend, function(friend)
      {
        $location.url("/friends/index");
      });
    };

    $scope.redirect = function(destination)
    {
      $location.url(destination);
    }

    // Get all our users when the controllers loads.
    index();
  }]);
