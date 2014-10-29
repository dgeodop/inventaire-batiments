var ctrlBatEtabl = angular.module('ctrlBatEtabl', []);

ctrlBatEtabl.controller("ctrlBatEtabl", function($scope,$http,$routeParams) {
	$http.get("api/bat/")
		.success(function(data) {
			$scope.bats = data;
		})
	var edit = this;
	edit.delBat = function(bat) {
		var idBat = bat.id_bat;
		$http.post("api/bat/" + idBat + "/del")
			.success(function(data) {
				window.location = "#/" + idEtabl;
			})
	}
});
