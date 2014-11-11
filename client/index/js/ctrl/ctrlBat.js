var ctrlBat = angular.module('ctrlBat', []);

ctrlBat.controller("ctrlBat", function($scope, $http, $routeParams) {
	var idBat = $routeParams.idBat;
	$http.get("api/bat/" + idBat)
		.success(function(data) {
			$scope.bat = data[0];
		});
});
