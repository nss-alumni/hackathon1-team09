;(function () {
  const ListController = function ($http, $timeout) {
    const vm = this
    
    vm.message = "This is the list of TILs"

    $http.get('/fakeData.json').then(response => {
      vm.tils = response.data
    })
  }

  angular.module('til-app').controller('ListController', ListController)
})();
