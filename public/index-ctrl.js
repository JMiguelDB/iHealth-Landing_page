angular.module("iHealthApp", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                //controller: "home-ctrl",
                templateUrl: "views/home.html",
                access: {restricted:false}
            })
    });