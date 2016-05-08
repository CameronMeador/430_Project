'use strict';

/**
 * @ngdoc function
 * @name seaterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seaterApp
 */
 angular.module('seaterApp')
   .controller('UserCtrl', ['$scope', function UserCtrl($scope) {
     this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];
     $scope.double = function(val){
       return val*2;
     };

   }]);
