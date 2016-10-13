// Set up the factory
app.factory('playerFactory', ['$http', function($http){
  var factory = {};

  // Factory methods
  var players =
  [
    // static players to make development easier.
    { name : "Hans", team : "" },
    { name : "Matt", team : "" },
    { name : "Steven", team : "" },
    { name : "Trump", team : "" }
  ];

  // Add a player
  factory.create = function(player)
  {
    if(player && player.name)
    {
      player.team = "";
      players.push(player);
    }
  }

  // Delete a player
  factory.delete = function(playerToDelete, callback)
  {
    for(var i = 0; i < players.length; i++)
    {
        if(playerToDelete === players[i])
          players.splice(i, 1);
    }

    callback(players);
  };

  // Return all players by invoking the callback and passing the players object.
  factory.index = function(callback)
  {
    callback(players);
  };

  factory.addAssignment = function(playerName, teamName, callback)
  {
    for(var i = 0; i < players.length; i++)
    {
      if(players[i].name == playerName)
      {
        players[i].team = teamName;
        break;
      }
    }

    callback(players);
  }

  factory.clearAssignment = function(index, callback)
  {
    players[index].team = "";

    callback(players);
  }

  factory.clearAssignmentsByTeam = function(team)
  {
    console.log("Looking to delete team: " + team.name);
    for(var i = 0; i < players.length; i++)
    {
      if(players[i].team == team.name)
      {
        players[i].team = "";
      }
    }
  }

  return factory;
}]);
