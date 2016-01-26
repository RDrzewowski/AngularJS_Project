(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('cover', {
        templateUrl: 'app/Cover/cover.html',
        controller: 'CoverController',
        controllerAs: 'cover'
      })

      $stateProvider
      .state('cover.welcome', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

    $stateProvider
      .state('cover.usersList', {
        url: '/users',
        templateUrl: 'app/Users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })

    $stateProvider
      .state('cover.aboutMe', {
        url: '/about',
        templateUrl: 'app/About/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })

    $stateProvider
      .state('cover.userInfo', {
        url: '/users/{login}',
        templateUrl: 'app/User/user.html',
        controller: 'UserInfoController',
        controllerAs: 'userinf'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
