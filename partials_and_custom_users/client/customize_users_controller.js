
// Note that it's using the same factory as the UserListsController, the userFactory.
app.controller('CustomizeUsersController', ['$scope', '$location', 'userFactory', function ($scope, $location, userFactory)
{
    $scope.users = [];
    userFactory.index(function(users)
    {
        $scope.users = users;
    });

    $scope.createUser = function()
    {
      // Call the factory function to add the user.
      userFactory.create($scope.newUser);
      $location.url('/userlist');
    }

    $scope.deleteUser = function(user)
    {
      // Call the factory function to delete the user.
      userFactory.delete(user, function(users){
        $scope.users = users;
      });
    }

    // Set up sorting
    $scope.sortType = 'last_name';
    $scope.sortReverse = false;
}]);
