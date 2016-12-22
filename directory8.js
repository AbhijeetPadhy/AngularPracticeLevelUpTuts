angular.module('directoryApp', [])
	.controller('directoryController',function(){
			var dirList = this;
			dirList.toggle = false;
			dirList.butonText = "Show Names";
			dirList.list = [
				{name:'Abhijeet',age:23},
				{name:'Abhisekh',age:28},
				{name:'Shaunak',age:32},
				{name:'Bhagu',age:31},
				{name:'Abhisekh Padhy',age:67},
				{name:'Abhisekh Mishra',age:28}
			];

			dirList.addPerson = function(){
				dirList.list.push({ name:dirList.name , age:dirList.age });
				dirList.name = "";
				dirList.age = 0;
			};
			dirList.swapButton = function(){
				if(dirList.toggle == false){
					dirList.toggle = true;
					dirList.butonText = "Show Names";
				}else{
					dirList.toggle = false;
					dirList.butonText = "Hide Names";
				}
			}
		}
	);
