var ctrlTous = angular.module('ctrlTous', []);

ctrlTous.controller("ctrlTous", function($http, $scope) {
	var app = this;
	$http.get("/ctip/tousbat")
	.success(function(data) {
		$scope.bats = data;
	})
});
