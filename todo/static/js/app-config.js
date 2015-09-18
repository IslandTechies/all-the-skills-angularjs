'use strict';

angular
  .module('todo')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'form': {
            templateUrl: 'views/form.html',
            controller: 'FormCtrl',
          },
          'notes': {
            templateUrl: 'views/notes.html',
            controller: 'NotesCtrl',
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  });
