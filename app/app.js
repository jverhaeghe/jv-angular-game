'use strict';

// Declare app level module which depends on views, and components
angular.module('jvAngularGame', [
  'ngRoute',
  'jvAngularGame.view1',
  'jvAngularGame.directives',
  'jvAngularGame.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
