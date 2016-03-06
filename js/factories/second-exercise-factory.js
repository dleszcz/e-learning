app.factory("SecondExerciseFactory", function() {
    var items = [
        {
            id : 1,
            name : 'Bring learning to life',
            src : '../images/Exercise 2/PE_Bringing_learning_to_life.jpg'
        },
        {
            id : 2,
            name : 'Establish a common standard',
            src : '../images/Exercise 2/PE_Reach_a_common_standard.jpg'
        },
        {
            id : 3,
            name : 'Let talent speak to itself',
            src : '../images/Exercise 2/Time_talent_spoke_for_itself.jpg'
        }
    ],

    page = {
        title :'Exercise 2'
    },

    shuffle = {
        items : shuffleItems(items)
    };

    return {
        items : items,
        page : page,
        shuffle : shuffle
    }
});