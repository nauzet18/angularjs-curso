'use strict';

/**
 * @ngdoc function
 * @name 16App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 16App
 */
angular.module('16App')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = [
      'item 1',
      'item 2',
      'item 3'
    ];

    $scope.addTarea = function()
    {
      $scope.tareas.push( $scope.tarea );      
      $scope.tarea="";
    };

    $scope.eliminarTarea = function(index)
    {
      
      $scope.tareas.splice(index, 1);
    };

  });
