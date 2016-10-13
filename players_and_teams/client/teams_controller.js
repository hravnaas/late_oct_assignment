
// Set up the controller.
app.controller('TeamsController', ['$scope', 'teamFactory', 'playerFactory', function($scope, teamFactory, playerFactory)
{
    $scope.teams = [];
    teamFactory.index(function(teams)
    {
        $scope.teams = teams;
    });

    // Add a new team
    $scope.addTeam = function()
    {
      // Call the factory function to add a new team.
      teamFactory.create($scope.newTeam, function(teams){
        // Update teams in $scope.
        $scope.teams = teams;
        $scope.newTeam = {}; // TODO: Figure out why this doesn't work.
      });
    }

    // Remove a team
    $scope.deleteTeam = function(team)
    {
      // Call the factory function to remove the team.
      teamFactory.delete(team, function(teams){
        // Update teams in $scope.
        $scope.teams = teams;

        // If a team is deleted, we also need to
        // remove that team from each player associated with it.
        playerFactory.clearAssignmentsByTeam(team);

      });
    }
}]);
