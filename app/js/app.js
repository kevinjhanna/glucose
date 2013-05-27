'use strict';


// Declare app level module which depends on filters, and services
angular.module('glucoseApp', ['glucoseApp.filters', 'glucoseApp.services', 'glucoseApp.directives', 'glucoseApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/readings', {templateUrl: 'partials/readings.html', controller: 'ReadingsCtrl'});
    $routeProvider.when('/new/:readingId', {templateUrl: 'partials/new_reading.html', controller: 'NewReadingCtrl'});
    $routeProvider.when('/new', {templateUrl: 'partials/new_reading.html', controller: 'NewReadingCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/readings'});
  }]);
