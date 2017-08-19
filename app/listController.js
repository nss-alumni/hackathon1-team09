;(function () {
  const ListController = function () {
    const vm = this
    
    vm.message = "This is the list of TILs"
  }

  angular.module('til-app').controller('ListController', ListController)
})();
