

app.controller('AssociationsController', ['$scope', '$location', 'teamFactory', 'playerFactory', function($scope, $location, teamFactory, playerFactory)
{
    $scope.playersteams = [];

    // Get and store all the team names.
    teamFactory.index(function(teams)
    {
      // Store all the team names
      $scope.teams = teams;

      // Get all the players.
      // Initially, no players are assigned to teams.
      playerFactory.index(function(players)
      {
        for(var i = 0; i < players.length; i++)
        {
          $scope.playersteams.push({ player : players[i].name });
          //$scope.playersteams.push({ player : players[i].name, team : "seageese" });
        }
      });

    });

    $scope.addAssignment = function()
    {
      for(var i = 0; i < $scope.playersteams.length; i++)
      {
        if($scope.playersteams[i].player == $scope.assignment.player)
        {
          $scope.playersteams[i].team = $scope.assignment.team;
          break;
        }
      }
      // Clear the player and team selections.
      $scope.assignment.player = {};
      $scope.assignment.team = {};
    }

    $scope.clearAssignment = function(index)
    {
      delete $scope.playersteams[index].team;
    }

    // Set up sorting
    $scope.sortType = 'name';
    $scope.sortReverse = false;
}]);
