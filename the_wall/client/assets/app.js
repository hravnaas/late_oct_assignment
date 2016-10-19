var app = angular.module('app', ['ngRoute', 'ngMessages']);

// Angular route configuration.
app.config(function($routeProvider)
{
  $routeProvider
    // Login.
    .when('/messages/login', {
      templateUrl: '/partials/login.html',
      controller: 'userController'
    })
    // Default route to show all messages and comments.
    // This page offers the ability to add messages and comments.
    .when('/messages/index', {
      templateUrl: '/partials/index.html',
      controller: 'messageController'
    })
    // Fallback - show all messages and comments.
    .otherwise({
      redirectTo: '/messages/index'
    });
});
