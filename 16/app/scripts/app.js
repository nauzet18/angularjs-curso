'use strict';

/**
 * @ngdoc overview
 * @name 16App
 * @description
 * # 16App
 *
 * Main module of the application.
 */
angular
  .module('16App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])

  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('16App');
  }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
