(function() {
  'use strict';

  angular
    .module('angularProject')
    .factory('UsersData', UsersData);


    function UsersData($http){ 
 
  return   function(value){


  return    $http.get('https://api.github.com/users?since='+(value-1))
            .success(function(data) { 

              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
           
         }
}    
 
})();
