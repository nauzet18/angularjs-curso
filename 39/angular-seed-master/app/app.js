'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  
  'myApp.services',
  'myApp.filters',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'lista-pelis/lista-pelis.html', controller: 'ListaPelisCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);