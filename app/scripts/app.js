'use strict';

/**
 * @ngdoc overview
 * @name seaterApp
 * @description
 * # seaterApp
 *
 * Main module of the application.
 */
angular
  .module('seaterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/userhome', {
        templateUrl: 'views/userhome.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/submit', {
        templateUrl: 'views/submit.html',
        controller: 'SubmitCtrl',
        controllerAs: 'submit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
