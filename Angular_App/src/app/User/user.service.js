(function() {
  'use strict';

  angular
    .module('angularProject')
    .factory('UserData', UserData);


    function UserData($http){ 
 

  return   function(value){


  return    $http.get('https://api.github.com/users/' + value)
            .success(function(data) { 

              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
           
         }
         
}
	


    
 
})();
