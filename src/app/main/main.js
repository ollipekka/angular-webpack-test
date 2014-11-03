
require('../module1/module1');
require('../module2/module2');
require('./main.controller.js');
require('./main.html');

console.log("Main evaluated");
module.exports = angular.module('main', ['module1', 'module2']);
