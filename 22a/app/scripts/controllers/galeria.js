'use strict';

/**
 * @ngdoc function
 * @name 22aApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the 22aApp
 */
angular.module('22aApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures =$scope.pictures=[];

    var baseURL='http://lorempixel.com/300/180/';

    var titles=['Comida Sana','Salud y trabajo','Vida en la ciudad ',
             'Mantente activo','Cuida tu aspecto','¡¡Vida nocturna!!'] ;

    var keywords=['food', 'business','city','sports','fashion', 
               'nightlife'];

    var dummyText='Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor.';

    $scope.addPics=function(i){
       pictures.push({
             url:baseURL+keywords[i],
             title:titles[i],
             summary:dummyText
        });
    };

    for (var i=0;i<5;i++){
        $scope.addPics(i);
    }  

    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;
    });
