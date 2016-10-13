
var app = angular.module('app', ['ngRoute']);

// The below should be moved into config/routes.js
app.config(function($routeProvider){
  $routeProvider
    .when("/players", {
      templateUrl : 'static/partials/players.html',
      controller : "PlayersController"
    })
    .when("/teams", {
      templateUrl : 'static/partials/teams.html',
      controller : "TeamsController"
    })
    .when("/associations", {
      templateUrl : 'static/partials/associations.html',
      controller : "AssociationsController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
