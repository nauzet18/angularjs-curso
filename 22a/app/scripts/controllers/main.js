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

    // Modelo para los tres bloques de contenidos
    var baseURL='http://lorempixel.com/200/200/'
    $scope.contenido=[
    {
       img:baseURL+'people',
       title:'Sobre Nosotros',
       sumario:'Somos una empresa comprometida con la vida sana'
    },
    {
       img:baseURL+'business',
       title:'Nuestros Servicios',
       sumario:'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
    },
    {

       img:baseURL+'transport',
       title:'Contáctanos',
       sumario:'#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
    }
    ]
  });
