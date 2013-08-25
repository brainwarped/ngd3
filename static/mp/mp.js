/***
  App is broken into the following folder structure
  /mpApp
      /controllers      
      /directives
      /services
      /partials
      /views
***/
'use strict';

// configure routes and associate each route with a view and a controller
var mpDashboard = angular.module('mpDashboard', ['d3', 'ngResource']).
  config('$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/',
    {
        controller: 'mpBulletController',
        templateUrl: '/partials/View1.html'
    }).
    otherwise({ redirectTo: '/' });
});



