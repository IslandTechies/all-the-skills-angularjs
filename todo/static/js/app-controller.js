'use strict';

angular
  .module('todo')
  .controller('FormCtrl', ['$scope', 'notes', '$rootScope', function($scope, notes, $rootScope) {
    $scope.note = {
      completed: false,
    };

    $scope.title = 'New Note';

    $scope.noteSave = function() {
      notes.notes.push($scope.note);
      $scope.note = {};
      $scope.noteForm.$setPristine();
      $rootScope.active = false;
    };
  }])
  .controller('NotesCtrl', ['$scope', 'notes', function($scope, notes) {
    $scope.notes = notes.notes;

    $scope.removeNote = function(note) {
      notes.notes.splice(notes.notes.indexOf(note), 1);
    };
  }]);
