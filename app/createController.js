;(function () {
  const CreateController = function () {
    const vm = this

    
    vm.message = "This is the create TIL view"
  }

  angular.module('til-app').controller('CreateController', CreateController)
})();
