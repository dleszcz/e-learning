var app = angular.module("elearning", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/first', {
            templateUrl : 'partials/first-exercise.html',
            controller  : 'FirstExerciseController'
        })
        .when('/second', {
            templateUrl : 'partials/second-exercise.html',
            controller  : 'SecondExerciseController'
        });
});