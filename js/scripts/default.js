var shuffleItems = function(options) {
    var m = options.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = options[m];
        options[m] = options[i];
        options[i] = t;
    }
    return options;
};

var buttons = document.getElementsByClassName('btn-option');

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    angular.element(buttons[i]).innerHTML('elo');
}