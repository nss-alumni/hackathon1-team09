;(function () {
  const CreateController = function ($http, $location) {
    const vm = this

    vm.submit = () => {
      const postData = {
        text: vm.tilText,
        userId: ''
      }
      $location.path('/list')
      /*
      $http.post('', postData).then(success => {
        $location.path('/list')
      }, error => {
        // handle error
      })
      */
    }  
  }

  angular.module('til-app').controller('CreateController', CreateController)
})();
