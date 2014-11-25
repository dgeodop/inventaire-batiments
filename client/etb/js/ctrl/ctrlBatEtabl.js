var ctrlBatEtabl = angular.module('ctrlBatEtabl', []);

ctrlBatEtabl.controller("ctrlBatEtabl", function($scope,$http,$routeParams) {
	$http.get("api/bat/")
		.success(function(data) {
			$scope.bats = data;
			if ($scope.bats.dir == 1 ) { $scope.bats.dirClass = "glyphicon glyphicon-home" }
			else { $scope.bats.dirClass = "" }
		})
	var edit = this;
	edit.delBat = function(bat) {
		var idBat = bat.id_bat;
		$http.post("api/bat/" + idBat + "/del")
			.success(function(data) {
				$scope.bats = data;
			})
	}
	edit.setDir = function(bat) {
		var idBatDgeo = bat.id_bat_dgeo; 
		$http.post("api/bat/" + idBatDgeo + "/dir")
			.success(function(data) {
				$scope.bats = data;
			})
	}
});
