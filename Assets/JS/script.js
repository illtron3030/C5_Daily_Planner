let schedule = [
  {
    Time: "9 am",
    tag: 9,
    tasks: "",
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
  loadTasks();

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm A"));

  let scheduleContainer = $(".container");
  console.log(scheduleContainer);
  let getCurrentHour = moment().format("H");
  $.each(schedule, function (i, time) {
    scheduleContainer.append('<div id="time' + i + '"' + 'class="row"></div>');
    $("#time" + i).append(
      '<div id="currentTime' +
        i +
        '"' +
        'class="col-2 hour">' +
        time.Time +
        "</div>"
    );
    let scheduleHour = time.tag;
    let stateClass = "";
    if (getCurrentHour > scheduleHour) {
      stateClass = "past";
    } else if (getCurrentHour == scheduleHour) {
      stateClass = "present";
    } else if (getCurrentHour < scheduleHour) {
      stateClass = "future";
    }

    $("#time" + i).append(
      '<textarea id="textArea' +
        i +
        '"' +
        'class="col-8 ' +
        stateClass +
        '"textarea">' +
        schedule[i].tasks +
        "</textarea>"
    );
    $("#time" + i).append(
      '<div id="saveBtn' +
        i +
        '"' +
        'data-index="' +
        i +
        '"' +
        'class="col-2 saveBtn">' +
        "save" +
        "</div>"
    );
  });

  $(".saveBtn").click(function (event) {
    let element = event.target;
    let index = parseInt($(element).attr("data-index"), 10);
    console.log(index);
    saveTask(index);
  });
});

function loadTasks() {
  let data = localStorage.getItem("schedule");
  if (data) {
    let scheduleArray = JSON.parse(data);
    $.each(scheduleArray, function (i, item) {
      schedule[i].tasks = item.tasks;
    });
  } else {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }
}

function saveTask(index) {
  let textArea = $("#textArea" + index);
  if (textArea.val() !== "") {
    schedule[index].tasks = textArea.val();
    localStorage.setItem("schedule", JSON.stringify(schedule));
  } else {
    alert("No tasks to save!");
  }
}

