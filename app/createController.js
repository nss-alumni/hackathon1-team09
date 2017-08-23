;(function () {
  const CreateController = function ($http, $location, ) {
    const vm = this

    vm.submit = () => {
      const postData = {
        text: vm.tilText
      }
      $location.path('/list')
      $http.post('https://nss-til.herokuapp.com/api/tils', postData).then(success => {
        $location.path('/list')
      }, error => {
        console.error(error)
      })
    }
  }

  angular.module('til-app').controller('CreateController', CreateController)
})();
