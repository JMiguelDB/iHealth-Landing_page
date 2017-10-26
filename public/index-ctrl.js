var app = angular.module('iHealthApp', ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        //controller: "Auth0-ctrl",
        templateUrl: "views/home.html"
    });
    $locationProvider.html5Mode(true);
});
