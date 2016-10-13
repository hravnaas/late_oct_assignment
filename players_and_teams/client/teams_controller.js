
// Set up the controller.
app.controller('TeamsController', ['$scope', 'teamFactory', function ($scope, teamFactory)
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
      });
    }

    // Set up sorting
    $scope.sortType = 'name';
    $scope.sortReverse = false;
}]);
