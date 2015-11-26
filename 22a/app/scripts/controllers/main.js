'use strict';

/**
 * @ngdoc function
 * @name 22aApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 22aApp
 */
angular.module('22aApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;

    $scope.slides = [
      {
        title: 'Aprende',
        image: baseURL+'sports/',
        text: 'Hazlo'
      },
      {
        title: 'Alimentación',
        image: baseURL+'food/',
        text: 'Come'
      },
      {
        title: 'Naturaleza',
        image: baseURL+'nature/',
        text: 'Vive'
      }
    ];


  });
