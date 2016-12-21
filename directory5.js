angular.module('directoryApp', [])
	.controller('directoryController',function($scope){
			$scope.list = [
				{name:'Abhijeet',age:23},
				{name:'Abhisekh',age:28},
				{name:'Shaunak',age:27},
				{name:'Bhagu',age:24},
				{name:'Abhisekh Padhy',age:28},
				{name:'Abhisekh Mishra',age:28}
			];

			$scope.addPerson = function(){
				$scope.list.push({ name:$scope.name , age:$scope.age });
				$scope.name = "";
				$scope.age = 0;
			};
		}
	);
