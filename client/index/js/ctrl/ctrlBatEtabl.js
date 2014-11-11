var ctrlBatEtabl = angular.module('ctrlBatEtabl', []);

ctrlBatEtabl.controller("ctrlBatEtabl", function($scope,$http,$routeParams) {
	var idEtabl = $routeParams.idEtabl;
	$scope.idEtabl = idEtabl;
	$http.get("/etb/"+idEtabl+"/api/bat")
		.success(function(data) {
			$scope.bats = data;
		})
});
