let schedule = [
  {
    Time: "9 am", //time slot user sees
    tag: 9, //tag using military time for defining past, present future to color code it.
    tasks: "", //will hold task input from user
  },

  {
    Time: "10 am",
    tag: 10,
    tasks: "",
  },

  {
    Time: "11am",
    tag: 11,
    tasks: "",
  },

  {
    Time: "12 pm",
    tag: 12,
    tasks: "",
  },

  {
    Time: "1 pm",
    tag: 13,
    tasks: "",
  },

  {
    Time: "2 pm",
    tag: 14,
    tasks: "",
  },

  {
    Time: "3 pm",
    tag: 15,
    tasks: "",
  },

  {
    Time: "4 pm",
    tag: 16,
    tasks: "",
  },

  {
    Time: "5 pm",
    tag: 17,
    tasks: "",
  },
];

$(function () {
  loadTasks(); //check to see if there are any exisitng tasks to load
  
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm A")); //shows current date and time

  let scheduleContainer = $(".container"); //load main container to var
  //console.log(scheduleContainer);
  let getCurrentHour = moment().format("H"); //set military time
  $.each(schedule, function (i, time) {  //go through each item in schedule array
    //go through each item in array
    scheduleContainer.append('<div id="time' + i + '"' + 'class="row"></div>'); //make a new row with the id of time and append it as a child to cotainer
    $("#time" + i).append('<div id="currentTime' + i + '"' + 'class="col-2 hour">' + time.Time+ "</div>"
    );
    let scheduleHour = time.tag;
    let stateClass = "";
    if (getCurrentHour > scheduleHour) { //styling for past, present and future
      stateClass = "past";
    } else if (getCurrentHour == scheduleHour) {
      stateClass = "present";
    } else if (getCurrentHour < scheduleHour) {
      stateClass = "future";
    }

    $("#time" + i).append(
      '<textarea id="textArea' + i + '"' + 'class="col-8 ' + stateClass +'"textarea">' + schedule[i].tasks +"</textarea>"
    );
    $("#time" + i).append(
      '<div id="saveBtn' + i + '"' + 'data-index="' + i + '"' + 'class="col-2 saveBtn">' + "save" + "</div>" //append child div saveBtn to the time row
    );
  });

  $(".saveBtn").click(function (event) {
    //make rows and add to click event
    let element = event.target; //set element to the div that has been clicked
    let index = parseInt($(element).attr("data-index"), 10); //set index to data-index attribute of div to get the number
    //console.log(index);
    saveTask(index); //call saveTask function and pass in the index so it will be known which row will be saved
  });
});

function loadTasks() {
  let data = localStorage.getItem("schedule"); //set data equal to
  if (data) {
    //if not undefined
    let scheduleArray = JSON.parse(data); //set schedule array equal to data
    $.each(scheduleArray, function (i, item) {
      //go through each item in schedule array
      schedule[i].tasks = item.tasks; //set task property of schedule array to current task item in schedule array
    });
  } else {
    localStorage.setItem("schedule", JSON.stringify(schedule)); //if data is not defined then save new schedule object to local storage
  }
}

function saveTask(index) {
  let textArea = $("#textArea" + index); //set user tasks to the id of current text area
  if (textArea.val() !== "") {
    //make sure text area is not blank
    schedule[index].tasks = textArea.val(); //set tasks property to current index
    localStorage.setItem("schedule", JSON.stringify(schedule)); //convert to string and attach to local storage
  } else {
    alert("No tasks to save!"); //alert user if space left blank
  }
}

//when I format document using Prettier is makes some things look off...
