;(function () {
  const app = angular.module('til-app', ['ngRoute'])

  app.config(($routeProvider, $locationProvider) => {
    $routeProvider.when('/list', {
      templateUrl: 'templates/listView.html',
      controller: 'ListController as listCtrl'
    }).when('/create', {
      templateUrl: 'templates/createView.html',
      controller: 'CreateController as createCtrl'
    }).otherwise({ redirectTo: '/list' })
  })
})();
