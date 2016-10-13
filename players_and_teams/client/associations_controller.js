

app.controller('AssociationsController', ['$scope', '$location', 'teamFactory', 'playerFactory', function($scope, $location, teamFactory, playerFactory)
{
  $scope.players = [];

  // Get and store all the team names.
  teamFactory.index(function(teams)
  {
    // Store all the team names
    $scope.teams = teams;

    // Get all the players.
    // Initially, no players are assigned to teams.
    playerFactory.index(function(players)
    {
      $scope.players = players;
    });

  });

  $scope.addAssignment = function()
  {
    playerFactory.addAssignment($scope.assignment.player, $scope.assignment.team, function(players)
    {
      $scope.players = players;
    });

    // Clear the player and team selections.
    $scope.assignment.player = {};
    $scope.assignment.team = {};
  }

  $scope.clearAssignment = function(index)
  {
    playerFactory.clearAssignment(index, function(players)
    {
      $scope.players = players;
    });
  }
}]);
