'use strict';

angular
  .module('todo')
  .factory('notes', function() {
    var service = {
      notes: [],
    };

    return service;
  });
