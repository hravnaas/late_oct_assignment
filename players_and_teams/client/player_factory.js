// Set up the factory
app.factory('playerFactory', ['$http', function($http){
  var factory = {};

  // Factory methods
  var players =
  [
    // static players to make development easier.
    { name : "Hans" },
    { name : "Matt" },
    { name : "Steven" },
    { name : "Trump" }
  ];

  // Add a player
  factory.create = function(player)
  {
    if(player && player.name)
      players.push(player);
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

  return factory;
}]);
