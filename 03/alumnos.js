function AlumnosController($scope)
{
	$scope.alumnos = [
    { nombre: "nauzet", curso: "1º", telefono: "925248763" },
    { nombre: "nzet", curso: "3º", telefono: "965248763" },
    { nombre: "nauz", curso: "4º", telefono: "915248763" },
    { nombre: "auzet", curso: "6º", telefono: "920248763" },
  ]

  $scope.Save = function(){

    $scope.alumnos.push(
        { nombre: $scope.nuevoAlumno.nombre, curso: $scope.nuevoAlumno.curso, telefono: $scope.nuevoAlumno.telefono }
      );  
  }


}
