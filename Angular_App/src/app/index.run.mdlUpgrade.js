(function() {
  'use strict';
/* global componentHandler */

  angular
    .module('angularProject')
    .run(mdlUp)

  /** @ngInject */
  function mdlUp($rootScope, $timeout) {


var deregistrationCallback = $rootScope.$on('$viewContentLoaded', function() {

        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });


$rootScope.$on('$destroy', deregistrationCallback)
  }

})();
