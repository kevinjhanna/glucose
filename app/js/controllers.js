'use strict';

/* Controllers */

angular.module('glucoseApp.controllers', []).
  controller('ReadingsCtrl', ['$scope', 'Reading', function($scope, Reading) {
    $scope.readings = Reading.query();

  }])
  .controller('NewReadingCtrl', ['$scope', 'Reading', function($scope, Reading) {

    $scope.save = function() {
      console.log($scope.reading);
    }
  }]);
