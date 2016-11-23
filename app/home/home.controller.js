(function() {
    'use strict';

    angular
        .module('app')
        .controller('GithubController', GithubController);

    GithubController.$inject = ['$http'];

 function GithubController($http) {
 	var vm = this
 	vm.callGithubApi = callGithubApi;

 	//////////////////

 	function callGithubApi(){
	 		$http
	 		.get('http://api.github.com/users/' + vm.username + '?access_token=f547ba1253e20601764f5754b2bd3b4989420373')
	 		.then(function (response){
	 			vm.data = response.data;
	 		})
	 		.catch(function(error){
	 			alert('An error has occured downloading ' + vm.username + ' from GitHub');
	 		});
	 	}
	 }
})();

//f547ba1253e20601764f5754b2bd3b4989420373