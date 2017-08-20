;(function () {
  const TokenService = function ($location, $http) {
    const service = this

    service.user = {}

    const fetchUserInfo = token => $http.get(`https://slack.com/api/users.identity?token=${token}`).then(response => {
      service.user = response.data.user
    }, error => {
      console.error(error)
    })

    service.getToken = () => localStorage.getItem('access-token')

    if (this.getToken()) {
      fetchUserInfo(this.getToken())
    } else if ($location.search().code) {
      const url = `https://slack.com/api/oauth.access?client_id=230121615159.228379318880&client_secret=77d0fa9f96df152fae5385fccac6740a&code=${$location.search().code}`
      $http.get(url).then(response => {
        if (response.data.ok) {
          localStorage.setItem('access-token', response.data.access_token)
          fetchUserInfo(response.data.access_token)
        }
      }, error => {
        console.error(error)
      })
    }
  }

  angular.module('til-app').service('tokenService', TokenService)
})();
