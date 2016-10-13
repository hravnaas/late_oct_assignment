// Set up the controller.
app.controller('PlayersController', ['$scope', 'playerFactory', function ($scope, playerFactory)
{
    $scope.players = [];
    playerFactory.index(function(players)
    {
        $scope.players = players;
    });

    // Add a new player
    $scope.addPlayer = function()
    {
      // Call the factory function to add a new player.
      playerFactory.create($scope.newPlayer, function(players){
        // Update players in $scope.
        $scope.players = players;
        $scope.newPlayer = {};
      });
    }

    // Remove a player
    $scope.deletePlayer = function(player)
    {
      // Call the factory function to remove the player.
      playerFactory.delete(player, function(players){
        // Update players in $scope.
        $scope.players = players;
      });
    }

    // Set up sorting
    $scope.sortType = 'name';
    $scope.sortReverse = false;
}]);
