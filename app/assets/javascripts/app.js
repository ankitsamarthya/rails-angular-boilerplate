(function() {
    'use strict';
    angular.module('appname', ['ngRoute', 'ngResource', 'templates', 'ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ng-token-auth'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            '$authProvider',
            function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {

                $authProvider.configure([{
                    default: {
                        apiUrl: '/api',
                        proxyIf: function() { window.isOldIE(); }
                    }
                }]);

                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'home/_home.html',
                        controller: 'HomeCtrl'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'auth/_login.html',
                        controller: 'AuthCtrl',
                        onEnter: ['$state', '$auth', function($state, $auth) {
                            $auth.validateUser().then(function() {
                                $state.go('home');
                            });
                        }]
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: 'auth/_register.html',
                        controller: 'AuthCtrl',
                        onEnter: ['$state', '$auth', '$stateParams', function($state, $auth) {
                            $auth.validateUser().then(function() {
                                $state.go('home');
                            });
                        }]
                    });

                $urlRouterProvider.otherwise('/');

                $locationProvider.html5Mode(true);
            }
        ]);
})();