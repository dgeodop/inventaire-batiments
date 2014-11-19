var ctrlModifsParEtablVue = angular.module('ctrlModifsParEtablVue', []);

ctrlModifsParEtablVue.controller("ctrlModifsParEtablVue", function($http, $scope, $routeParams){
	var idEtabl = $routeParams.idEtabl;
	$scope.etabl = idEtabl;
	$http.get('/ctip/modifsParEtabl/' + idEtabl)
	.success(function(data) {
		$scope.events = data;	
	});
});
