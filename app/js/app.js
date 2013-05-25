'use strict';


// Declare app level module which depends on filters, and services
angular.module('glucoseApp', ['glucoseApp.filters', 'glucoseApp.services', 'glucoseApp.directives', 'glucoseApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/readings', {templateUrl: 'partials/readings.html', controller: 'ReadingsCtrl'});
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/readings'});
  }]);
