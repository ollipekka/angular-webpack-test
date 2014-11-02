'use strict';

angular.module('webpackTest', ['main', 'module1', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/module1/', {
                templateUrl: 'app/module1/module1.html',
                controller: 'Module1Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
