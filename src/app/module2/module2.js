
require('./module2.controller.js');
require('./module2.directive.js');
require('./module2.html');

console.log("module2 evaluated");
module.exports = angular.module('module2', []);
