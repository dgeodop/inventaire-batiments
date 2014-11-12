var ctrlClItin = angular.module('ctrlClItin', []);

ctrlClItin.controller("ctrlClItin", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	$http.get('/ctip/unBat/' + idBat)
	.success(function(data) {
		$scope.bat = data;	
	});
});
