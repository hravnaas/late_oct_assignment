/* our angular app modularize, with config */
var app = angular.module('app', ['ngRoute', 'ngMessages']);

/* configuration for angular route */
app.config(function($routeProvider)
{
  $routeProvider
    .when('/friends/index', {
      templateUrl: '/partials/index.html',
      controller: 'newController',
      controllerAs: 'NC'
    })
    .when('/friends/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
      controllerAs: 'NC'
    })
    .when('/friends/:id/edit', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .when('/friends/:id/delete', {
      templateUrl: '/partials/delete.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .when('/friends/:id', {
      templateUrl: '/partials/show.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .otherwise({
      redirectTo: '/friends/index'
    });
});
