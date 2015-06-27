var CDCApp = angular.module("CDCApp", ['ngRoute']);
CDCApp.config(['$routeProvider',
           function($routeProvide){
               $routeProvide.
                   when('/', {
                       templateUrl: './Views/main.html',
                       controller: 'mainController'
                   })
                   .when('/enlace', {
                       templateUrl: './Views/enlace.html',
                       controller: 'enlaceController'
                   })
                   .when('/inmuebles', {
                       templateUrl: './Views/inmuebles.html',
                       controller: 'inmueblesController'
                   })
                   .when('/cemabe', {
                       templateUrl: './Views/cemabe.html',
                       controller: 'cemabeController'
                   })
                   .otherwise({
                       redirectTo: '/'
                   });
           }]);
