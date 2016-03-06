app.factory("FirstExerciseFactory", function() {
    var items = [
        {
            id : 1,
            name : 'Globe',
            src : '../images/Exercise 1/Icon_globe2.jpg'
        },
        {
            id : 2,
            name : 'Book',
            src : '../images/Exercise 1/Icon_book.jpg'
        },
        {
            id : 3,
            name : 'Share',
            src : '../images/Exercise 1/Icon_share.jpg'
        },
        {
            id : 4,
            name : 'Chart',
            src : '../images/Exercise 1/Icon_graph.jpg'
        },
        {
            id : 5,
            name : 'Conversation',
            src : '../images/Exercise 1/Icon_speechBubble2.jpg'
        },
        {
            id : 6,
            name : 'Gauge',
            src : '../images/Exercise 1/Icon_gauge.jpg'
        }
    ],

    page = {
        title : 'Exercise 1'
    },

    shuffle = {
        shuffleItems : shuffleItems(angular.copy(items))
    };

    return {
        items : items,
        page : page,
        shuffle : shuffle
   };
});