angular.module('directoryApp', ['ngAnimate','ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url: '/',
				template: '<h1>Hello Home</h1>'
			})
			.state('about',{
				url: '/about',
				template: '<h1>Hello About</h1>'
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
