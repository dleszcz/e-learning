app.controller('FirstExerciseController', function($scope, FirstExerciseFactory, PageFactory) {
    $scope.items = FirstExerciseFactory.items;
    $scope.title = FirstExerciseFactory.page.title;
    $scope.subtitle = PageFactory.messages.subtitleLabel;

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

});