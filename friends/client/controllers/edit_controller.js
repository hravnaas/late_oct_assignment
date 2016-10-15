app.controller('editController',
  ['$scope',
  'friendsFactory',
  '$routeParams',
  '$location',
  function($scope, friendsFactory, $routeParams, $location)
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

     $scope.show();
}]);
