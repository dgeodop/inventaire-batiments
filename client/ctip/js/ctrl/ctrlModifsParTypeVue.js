var ctrlModifsParTypeVue = angular.module('ctrlModifsParTypeVue', []);

ctrlModifsParTypeVue.controller("ctrlModifsParTypeVue", function($http, $scope, $routeParams){
	var typEvent = $routeParams.typEvent;
	$scope.event = typEvent;
	$http.get('/ctip/modifsParType/' + typEvent)
	.success(function(data) {
		$scope.events = data;	
	});
});
