(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('UserInfoController', UserInfoController);

  /** @ngInject */
  function UserInfoController(UserData, $stateParams) {
  var vm = this;

    UserData($stateParams.login).success(function(data){
      vm.userData = data;
    });

   
}
  
})();
