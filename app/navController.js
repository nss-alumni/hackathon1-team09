;(function () {
  const NavController = function (tokenService, $scope) {
    const vm = this
    
    vm.user = tokenService.user

    $scope.$watch(() => tokenService.user, newVal => vm.user = newVal)
  }

  angular.module('til-app').controller('NavController', NavController)
})();
