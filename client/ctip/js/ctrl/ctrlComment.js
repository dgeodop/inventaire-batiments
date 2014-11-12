var ctrlComment = angular.module('ctrlComment', []);

ctrlComment.controller("ctrlComment", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	$http.get('/ctip/unBat/' + idBat)
	.success(function(data) {
		$scope.bat = data;	
	});
});
