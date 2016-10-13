// Set up the controller.
app.controller('UserListsController', ['$scope', 'userFactory', function ($scope, userFactory)
{
    $scope.users = [];
    userFactory.index(function(users)
    {
        $scope.users = users;
    });

    // Show all the users.
    // TODO: Is this needed? Use index about instead?
    $scope.showAll = function()
    {
      // Call the factory function to buy the product.
      userFactory.index(function(users){
        // Update users in $scope.
        $scope.products = users;
      });
    }

    // Set up sorting
    $scope.sortType = 'last_name';
    $scope.sortReverse = false;
}]);
