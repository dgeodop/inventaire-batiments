var ctrlSal = angular.module('ctrlSal', []);

ctrlSal.controller("ctrlSal", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	var idEtabl = $routeParams.idEtabl;
	$http.get("/etb/" + idEtabl + "/api/sal/" + idBat)
		.success(function(data) {
			$scope.sals = data;
		});
});
