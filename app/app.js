;(function () {
  const app = angular.module('til-app', ['ngRoute'])

  app.config(($routeProvider, $locationProvider, $httpProvider) => {
    $routeProvider.when('/list', {
      templateUrl: './listView.html',
      controller: 'ListController as listCtrl'
    }).when('/create', {
      templateUrl: './createView.html',
      controller: 'CreateController as createCtrl'
    }).otherwise({ redirectTo: '/hackathon1-team09/!#/list' })

    $httpProvider.interceptors.push(function($q, $location) {
      const interceptor = {};

      interceptor.request = function(config) {
        const token = localStorage.getItem('access-token');
        if (token && config.url.indexOf('slack') === -1) {
          config.headers['x-slack-user-id'] = localStorage.getItem('slack-user-id')
          config.headers['x-access-token'] = token
        };
        return config; 
      }

      interceptor.responseError = function(response) {
        return $q.reject(response)
      };

      return interceptor;
    })
  })
})();
