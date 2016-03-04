app.controller('SecondExerciseController', function($scope, SecondExerciseFactory, PageFactory) {
    $scope.items = SecondExerciseFactory.items;
    $scope.title = SecondExerciseFactory.page.title;
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