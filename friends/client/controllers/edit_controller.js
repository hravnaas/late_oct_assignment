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

    // Check if user is logged in when controller loads.
    // If so, show the index page. If not, redirect to login.
    usersFactory.getLoggedInUser(function(result)
    {
      $scope.user = result.user;
      if(!$scope.user)
        $location.url("/friends/login");
      else
        $scope.show();
    });
}]);
