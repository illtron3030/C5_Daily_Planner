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

    var scheduleContainer = $("#scheduleContainer");
    var getCurrentHour = (moment().format('H'));

    $.each(schedule, function(i, time)

    {
        scheduleContainer.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>");
        $("#time"+i).append("<div id=\"currentTime" + i + "\"" + "class=\"col-2 hour\">" + time.Time + "</div>");
        var scheduleHour = time.tag;

        var stateClass = "";
        if (getCurrentHour > scheduleHour)
        {
            stateClass ="past";
        }
        {
        else if (getCurrentHour == scheduleHour)
        {
            stateClass ="present";
        }
        else if (getCurrentHour < scheduleHour)
        {
            stateClass ="future";
        } 

        
       
    }




//add some comments
