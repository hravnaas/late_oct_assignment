// Set up the factory
app.factory('teamFactory', ['$http', function($http){
  var factory = {};

  // Factory methods
  var teams =
  [
    // static teams to make development easier.
    { name : "Seahawks" },
    { name : "49ers" },
    { name : "ThoseGuys" },
    { name : "Sounders" }
  ];

  // Add a team
  factory.create = function(team)
  {
    if(team && team.name)
      teams.push(team);
  }

  // Delete a team
  factory.delete = function(teamToDelete, callback)
  {
    for(var i = 0; i < teams.length; i++)
    {
        if(teamToDelete === teams[i])
          teams.splice(i, 1);
    }

    callback(teams);
  };

  // Return all teams by invoking the callback and passing the teams object.
  factory.index = function(callback)
  {
    callback(teams);
  };

  return factory;
}]);
