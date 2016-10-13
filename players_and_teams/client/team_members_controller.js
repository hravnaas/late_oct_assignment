
app.controller('TeamMembersController', ['$scope', 'playerFactory', '$routeParams', function($scope, playerFactory, $routeParams)
{
  $scope.teamPlayers = [];
  $scope.teamName = $routeParams.teamname;

  playerFactory.index(function(players)
  {
    for(var i = 0; i < players.length; i++)
    {
        if(players[i].team === $routeParams.teamname)
        {
          $scope.teamPlayers.push(players[i].name);
        }
    }
  });
}]);
