'use strict';

app.controller('CarsController', function CarsController ($scope, carsDataSrv) {

	//carsDataSrv.getData().then(function(data){
	//	$scope.cars = data;
	//	console.log($scope.cars);
	//});

	carsDataSrv.getAll();
});