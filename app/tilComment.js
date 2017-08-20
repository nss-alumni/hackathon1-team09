;(function () {
  const tilComment = () => ({
    restrict: 'E',
    bindToController: {
      til: '='
    },
    controller: function($http) {
      const vm = this

      vm.submit = () => {
        const postData = {
          text: vm.text,
          userId: '',
          tilId: vm.til.id
        }

        vm.til.comments.push(postData)
        vm.text = undefined
      }
    },
    controllerAs: 'ctrl',
    template: `
      <form class="col s12" name="tilComment">
        <section class="row">
          <section class="input-field col s12">
            <label for="til-text"></label>
            <textarea id="til-comment"
                      placeholder="Add your comment..."
                      class="materialize-textarea"
                      ng-model="ctrl.text"
                      maxlength="1000"></textarea>
          </section>
        </section>
        <a class="waves-effect waves-light btn"
           ng-disabled="!tilComment.$valid || !ctrl.text"
           ng-click="ctrl.submit()">
          Comment
        </a>
      </form>
    `
  })

  angular.module('til-app').directive('tilComment', tilComment);
})();
