'use strict';

angular.module('module2')
    .directive('module2Panel', function() {
        return {
            restrict: 'A',
            templateUrl: 'app/module2/module2.html'
        };
    });
