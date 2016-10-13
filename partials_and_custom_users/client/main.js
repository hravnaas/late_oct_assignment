var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when("/userlist", {
      templateUrl : 'static/partials/userList.html',
      controller : "UserListsController"
    })
    .when("/customize", {
      templateUrl : 'static/partials/customizeUsers.html',
      controller : "CustomizeUsersController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
