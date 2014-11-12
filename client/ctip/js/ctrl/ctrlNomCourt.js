var ctrlNomCourt = angular.module('ctrlNomCourt', []);

ctrlNomCourt.controller("ctrlNomCourt", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
});
