'use strict';

/* Controllers */

angular.module('glucoseApp.controllers', []).
  controller('ReadingsCtrl', ['$scope', 'Reading', function($scope, Reading) {
    $scope.readings = Reading.query();
  }])
  .controller('NewReadingCtrl', ['$scope', '$routeParams', 'Reading', function($scope, $routeParams, Reading) {
    if ($routeParams.readingId)
  {
      $scope.reading = Reading.get({readingId: $routeParams.readingId}, function(reading) {
      });
  }

    $scope.moments = [
      {"label": "Morning (fasting)", "value": "morning"},
      {"label": "Midday (2h after lunch)", "value": "night"},
      {"label": "Night (2h after dinner)", "value": "night"}
    ];

    $scope.save = function() {
      alert($scope.reading.moment);
    }
  }]);
