angular.module('directoryApp', ['ngAnimate','ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: 'home18.html',
				controller: 'directoryController as dirList'
			})
			.state('about',{
				url: '/about',
				templateUrl: 'about18.html'
			});
	})
	.controller('directoryController',function(){
			var dirList = this;
			dirList.toggle = false;
			dirList.list = [
				{name:'Abhijeet',age:23,img:'img/1.jpg'},
				{name:'Abhisekh',age:28,img:'img/2.jpg'},
				{name:'Shaunak',age:27,img:'img/3.jpg'},
				{name:'Bhagu',age:32,img:'img/4.jpg'},
				{name:'Abhisekh Padhy',age:31,img:'img/5.jpg'},
				{name:'Abhisekh Mishra',age:28,img:'img/6.jpg'}
			];

			dirList.addPerson = function(){
				dirList.list.push({ name:dirList.name , age:dirList.age });
				dirList.name = "";
				dirList.age = 0;
			};
		}
	);

//Note that in line 4 if we write "var dirList.toggle = false;" it will be an error
