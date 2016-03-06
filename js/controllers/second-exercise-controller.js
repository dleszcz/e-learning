app.controller('SecondExerciseController', function($scope, SecondExerciseFactory, PageFactory) {
    $scope.items = SecondExerciseFactory.items;
    $scope.title = SecondExerciseFactory.page.title;
    $scope.subtitle = PageFactory.messages.subtitleLabel;
    $scope.checkAnswers = PageFactory.messages.checkAnswers;
    $scope.previous = PageFactory.messages.previous;
    $scope.next = PageFactory.messages.next;
    $scope.tryAgain = PageFactory.messages.tryAgain;
    $scope.select = PageFactory.messages.selectLabel;

    $scope.status = {
        isopen: false
    };

    $scope.shuffleItems = SecondExerciseFactory.shuffle.items;

    $scope.checkAllAnswers = function () {
        check();
    };

    $scope.clear = function () {
        clear();
    };

    $scope.previousDisabled = false;
    $scope.nextDisabled = true;
    $scope.previousHref = "#/first";
    $scope.nextHref = "";

    var check = function () {
        var buttons = document.getElementsByClassName('btn-option');

        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];

            if ($scope.items[i].id.toString() === button.value) {
                angular.element(button).removeClass('btn-danger');
                angular.element(button).addClass('btn-success');
            } else {
                angular.element(button).addClass('btn-danger');
                angular.element(button).removeClass('btn-success');
            }
        }

        $scope.subtitle = PageFactory.messages.subtitleCheck;
        $scope.checked = true;
    };

    var clear = function () {
        var buttons = document.getElementsByClassName('btn-option');

        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];

            angular.element(button).removeClass('btn-danger');
            angular.element(button).removeClass('btn-success');
            button.value = "";
        }
        $scope.subtitle = PageFactory.messages.subtitleLabel;
        $scope.checked = false;
    };

    $scope.imageHeight = "img-lg";
});