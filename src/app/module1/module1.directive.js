'use strict';

angular.module('module1')
    .directive('module1Panel', function() {
        return {
            restrict: 'A',
            templateUrl: 'app/module1/module1.html'
        };
    });
