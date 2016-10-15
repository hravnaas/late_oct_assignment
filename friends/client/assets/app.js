/* our angular app modularize, with config */
var app = angular.module('app', ['ngRoute']);

/* configuration for angular route */
app.config(function($routeProvider)
{
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/index.html',
      controller: 'newController',
      controllerAs: 'NC'
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
      controllerAs: 'NC'
    })
    .otherwise({
      redirectTo: '/index'
    });
});
