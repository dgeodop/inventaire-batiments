var ctrlBat = angular.module('ctrlBat', []);

ctrlBat.controller("ctrlBat", function($scope, $http, $routeParams) {
	var idBat = $routeParams.idBat;
	$http.get("api/bat/" + idBat)
		.success(function(data) {
			$scope.bat = data[0];
		})
	var edit = this;
	edit.editNom = function(bat) {
		$http.post("api/bat/" + idBat + "/nom", bat)
			.success(function(data) {
				$scope.bat = data[0];
			})
	}
	edit.editSite = function(bat) {
		$http.post("api/bat/" + idBat + "/site", bat)
			.success(function(data) {
				$scope.bat = data[0];
			})
	}
	edit.editAnConstr = function(bat) {
		$http.post("api/bat/" + idBat + "/anconstr", bat)
			.success(function(data) {
				$scope.bat = data[0];
			})
	}
	edit.editAnRenov = function(bat) {
		$http.post("api/bat/" + idBat + "/anrenov", bat)
			.success(function(data) {
				$scope.bat = data[0];
			})
	}
});
