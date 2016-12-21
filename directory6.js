angular.module('directoryApp', [])
	.controller('directoryController',function(){
			var dirList = this;
			dirList.list = [
				{name:'Abhijeet',age:23},
				{name:'Abhisekh',age:28},
				{name:'Shaunak',age:27},
				{name:'Bhagu',age:24},
				{name:'Abhisekh Padhy',age:28},
				{name:'Abhisekh Mishra',age:28}
			];

			dirList.addPerson = function(){
				dirList.list.push({ name:dirList.name , age:dirList.age });
				dirList.name = "";
				dirList.age = 0;
			};
		}
	);
