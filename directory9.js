angular.module('directoryApp', [])
	.controller('directoryController',function(){
			var dirList = this;
			dirList.toggle = false;
			dirList.list = [
				{name:'Abhijeet',age:23},
				{name:'Abhisekh',age:28},
				{name:'Shaunak',age:27},
				{name:'Bhagu',age:32},
				{name:'Abhisekh Padhy',age:31},
				{name:'Abhisekh Mishra',age:28}
			];

			dirList.addPerson = function(){
				dirList.list.push({ name:dirList.name , age:dirList.age });
				dirList.name = "";
				dirList.age = 0;
			};
		}
	);

//Note that in line 4 if we write "var dirList.toggle = false;" it will be an error
