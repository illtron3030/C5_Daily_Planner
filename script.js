var schedule = 
[
    {
        Time: "9 am",
        tag: 9,
        tasks:""
    },

    {
        Time: "10 am",
        tag: 10,
        tasks:""
    },

    {
        Time: "11am",
        tag: 11,
        tasks:""
    },

    {
        Time: "12 pm,",
        tag: 12,
        tasks:""
    },

    {
        Time: "1 pm,",
        tag: 13,
        tasks:""
    },

    {
        Time: "2 pm,",
        tag: 14,
        tasks:""
    },

    {
        Time: "3 pm,",
        tag: 15,
        tasks:""
    },

    {
        Time: "4 pm,",
        tag: 16,
        tasks:""
    },

    {
        Time: "5 pm,",
        tag: 17,
        tasks:""
    },
];

$(document).ready(function()
{
    loadTasks();

    $('#currentDay').text(moment().format('MMM Do YYY, h:mm:ss a'));

    var scheduleContainer = $("#schduleContainer");
    var getCurrentHour = (moment().format('H'));

}


//add some comments
