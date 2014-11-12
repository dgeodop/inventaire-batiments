var routes = angular.module('routes', []);

routes.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider
 	.when('/', {templateUrl: 'partials/index.html'})
	.when('/eventnom', {templateUrl: 'partials/eventnom.html'})
	.when('/pasnom', {templateUrl: 'partials/pasnom.html'})
	.when('/tous', {templateUrl: 'partials/tous.html'})
	.when('/comment/:idBat', {templateUrl: 'partials/comment.html'})
	.when('/clitin/:idBat', {templateUrl: 'partials/clitin.html'})
	.when('/nomcourt/:idBat', {templateUrl: 'partials/nomcourt.html'})
 	.otherwise({redirectTo: '/'});
 }]);
