var app = angular.module("elearning", ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'mgcrea.ngStrap']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/first', {
            templateUrl : 'partials/exercise.html',
            controller  : 'FirstExerciseController'
        })
        .when('/second', {
            templateUrl : 'partials/exercise.html',
            controller  : 'SecondExerciseController'
        })
        .otherwise('/first', {
            templateUrl : 'partials/exercise.html',
            controller  : 'FirstExerciseController'
        });
});