;(function () {
  const ListController = function ($http, $location, $scope, tokenService) {

    const vm = this

    $scope.$watch(() => tokenService.user, newVal => {
      vm.loggedIn = Boolean(newVal.name)
    })
    
    $http.get('https://4bb61cbf.ngrok.io/api/tils').then(response => {
      vm.tils = response.data.data
      vm.tils.forEach(t => t.createdAt = new Date(t.createdAt))
    }) 

    vm.search = () => {
      $http.get(`https://4bb61cbf.ngrok.io/api/search?q=${vm.searchTerm}`).then(response => {
        vm.tils = response.data.data
        vm.tils.forEach(t => t.createdAt = new Date(t.createdAt))
        vm.searchTerm = undefined
      })
    }

    vm.upvote = til => {
      $http.post(`https://4bb61cbf.ngrok.io/api/tils/${til.id}/upvote`, {}).then(response => {
        til.score += response.data.data[0].value
      }, error => {
        console.error(error)
      })
    }

    vm.downvote = til => {
      $http.post(`https://4bb61cbf.ngrok.io/api/tils/${til.id}/downvote`, {}).then(response => {
        til.score += response.data.data[0].value
      }, error => {
        console.error(error)
      })
    }

    vm.loadComments = til => {
      if (!til.comments) {
        $http.get(`https://4bb61cbf.ngrok.io/api/tils/${til.id}/comments`).then(response => {
          til.comments = response.data.data
          til.comments.forEach(c => c.createdAt = new Date(c.createdAt))
        }, error => {
          console.error(error)
        })
      }
    }
  }

  angular.module('til-app').controller('ListController', ListController)
})();
