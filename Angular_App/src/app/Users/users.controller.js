(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(UsersData) {
    var vm = this;

    vm.submit = submit;

    UsersData(1).success(function(data){
      vm.userData = data;
    });


    function submit(dane){

      UsersData(dane).success(function(data){
      vm.userData = data;
    });
    }


}
  
})();
