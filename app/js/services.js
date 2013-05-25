'use strict';

/* Services */

angular.module('glucoseApp.services', ['ngResource']).
  factory('Reading', function($resource){
    return $resource('readings/:readingId.json', {}, {
      query: {method:'GET', params:{readingId:'readings'}, isArray:true}
    });
  });
