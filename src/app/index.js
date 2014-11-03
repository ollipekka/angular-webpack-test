'use strict';

require('./main/main.js');
require('./module1/module1.js');
require('./module2/module2.js');

angular.module('webpackTest', ['main', 'module1', 'module2', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
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
            .when('/module2/', {
                templateUrl: 'app/module2/module2.html',
                controller: 'Module2Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
