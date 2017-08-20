;(function () {
  const ListController = function ($http, $location) {
    const vm = this
    
    vm.message = "This is the list of TILs"

    $http.get('https://4bb61cbf.ngrok.io/api/tils').then(response => {
      vm.tils = response.data.data
    }) 
  }

  angular.module('til-app').controller('ListController', ListController)
})();
