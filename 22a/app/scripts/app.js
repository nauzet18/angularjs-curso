'use strict';

/**
 * @ngdoc overview
 * @name 22aApp
 * @description
 * # 22aApp
 *
 * Main module of the application.
 */
angular
  .module('22aApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/articulos', {
        templateUrl: 'views/articulos.html',
        controller: 'ArticulosCtrl',
        controllerAs: 'articulos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
