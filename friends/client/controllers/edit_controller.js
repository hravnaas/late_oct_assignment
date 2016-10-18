app.controller('editController',
  ['$scope',
  'friendsFactory',
  '$routeParams',
  '$location',
  'usersFactory',
  function($scope, friendsFactory, $routeParams, $location, usersFactory)
  {
    $scope.id = $routeParams.id;

    $scope.show = function()
    {
      friendsFactory.getFriend($scope.id, function(returnedData)
      {
       $scope.friend = returnedData;
      });
    };

    $scope.update = function()
    {
      friendsFactory.update($scope.friend, function(returnedData){
       $location.url('/friends/index');
      })
    };

    $scope.delete = function(id)
    {
      friendsFactory.delete(id, function()
      {
       $location.url('/friends/index');
      });
    };

    // Check if user is logged in.
    var loggedIn = usersFactory.isLoggedIn(function(user)
    {
     $scope.user = user;
    });

    if(!loggedIn)
     $location.url("/friends/login");

    $scope.show();
}]);
