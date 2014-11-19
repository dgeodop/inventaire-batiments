var ctrlModifsParType = angular.module('ctrlModifsParType', []);

ctrlModifsParType.controller("ctrlModifsParType", function($http, $scope, $routeParams){
	$http.get('/ctip/modifsTypes')
	.success(function(data) {
		$scope.types = data;	
	});
});
