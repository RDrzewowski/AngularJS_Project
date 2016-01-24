(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

    $stateProvider
      .state('usersList', {
        url: '/users',
        templateUrl: 'app/Users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })

    $stateProvider
      .state('aboutMe', {
        url: '/about',
        templateUrl: 'app/About/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })

    $stateProvider
      .state('userInfo', {
        url: '/users/{login}',
        templateUrl: 'app/User/user.html',
        controller: 'UserInfoController',
        controllerAs: 'userinf'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
