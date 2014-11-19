var ctrlModifsParEtabl = angular.module('ctrlModifsParEtabl', []);

ctrlModifsParEtabl.controller("ctrlModifsParEtabl", function($http, $scope, $routeParams){
	$http.get('/api/etabl')
	.success(function(data) {
		$scope.etabls = data;	
	});
});
