'use strict';

/**
 * @ngdoc overview
 * @name yeomantodoApp
 * @description
 * # yeomantodoApp
 *
 * Main module of the application.
 */
angular
  .module('yeomantodoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
