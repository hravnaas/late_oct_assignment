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

     $scope.update = function(friend)
     {
       friendsFactory.update(friend, function(){
         $location.url('/');
       })
     }

     $scope.delete = function()
     {
       friendsFactory.delete($scope.id, function(){
         $location.url('/');
       });
     };
}]);
