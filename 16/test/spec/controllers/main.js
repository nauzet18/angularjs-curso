'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('16App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('no debe tener items al empezar', function () {
    expect(scope.tareas.length).toBe(0);
  });

  it('debe añadir items a la lista', function () {
    scope.tarea="mi tarea";
    scope.addTarea();
    expect(scope.tareas.length).toBe(1);
  });

  it('debe añadir y eliminar un items de la lista', function () {
    scope.tarea="mi tarea";
    scope.addTarea();
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(0);
  });

});
