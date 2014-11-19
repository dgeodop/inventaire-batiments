var ctrlDernieresModifs = angular.module('ctrlDernieresModifs', []);

ctrlDernieresModifs.controller("ctrlDernieresModifs", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	var app = this;
	$http.get('/ctip/modifs')
	.success(function(data) {
		$scope.modifs = data;
	});
});
