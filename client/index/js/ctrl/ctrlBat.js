var ctrlBat = angular.module('ctrlBat', []);

ctrlBat.controller("ctrlBat", function($scope, $http, $routeParams) {
	var idBat = $routeParams.idBat;
	var idEtabl = $routeParams.idEtabl;
	$scope.idEtabl = idEtabl;
	$http.get("/etb/" + idEtabl + "/api/bat/" + idBat)
		.success(function(data) {
			$scope.bat = data[0];
		});
});
