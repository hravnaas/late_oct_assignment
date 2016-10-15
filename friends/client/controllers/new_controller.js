app.controller('newController',
  ['$scope',
  'friendsFactory',
  '$location',
  function($scope, friendsFactory, $location)
{
  $scope.friends = [];
  $scope.friend = {};

  var index = function()
  {
    console.log("Client - in index");
    friendsFactory.index(function(returnedData)
    {
      $scope.friends = returnedData;
      console.log("Client - got result from index: " + returnedData);
    });
  };

  $scope.create = function()
  {
    friendsFactory.create($scope.newFriend, function(friend)
    {
      $location.url("/index");
    });
  };

  $scope.redirect = function(destination)
  {
    $location.url(destination);
  }

  // Get all our users when the controllers loads.
  index();
}]);
