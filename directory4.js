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
			$scope.var = 'Ahello';
			$scope.var2 = 'Bhello';
		}
	);
