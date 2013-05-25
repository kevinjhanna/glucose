'use strict';

/* Controllers */

angular.module('glucoseApp.controllers', []).
  controller('ReadingsCtrl', ['$scope', 'Reading', function($scope, Reading) {
    $scope.readings = Reading.query();

  }])
  .controller('MyCtrl2', [function() {

  }]);
