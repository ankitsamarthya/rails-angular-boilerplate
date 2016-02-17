angular.module('appname', ['ngRoute', 'ngResource', 'templates', 'ui.router', 'ngAnimate', 'ngAria', 'ngMaterial'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/_home.html',
      controller: 'HomeCtrl'
    });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}]);
