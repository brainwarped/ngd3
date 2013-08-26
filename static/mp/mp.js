/***
  App is broken into the following folder structure
  /mp
      /controllers      
      /directives
      /services
      /partials
***/
'use strict';

// configure routes and associate each route with a view and a controller
angular.module('mpDashboard', ['d3']).
  config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/',
    {
        controller: 'mpBulletController',
        templateUrl: 'static/mp/partials/View1.html'
    }).
    otherwise({ redirectTo: '/' });
}]);



