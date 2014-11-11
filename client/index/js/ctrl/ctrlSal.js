var ctrlSal = angular.module('ctrlSal', []);

ctrlSal.controller("ctrlSal", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	$http.get("api/sal/" + idBat)
		.success(function(data) {
			$scope.sals = data;
		});
});
