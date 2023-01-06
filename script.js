// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var Now = dayjs().format('MMM D YYYY, h:mm:ss a');
$("#currentDay").html(Now);
// console.log(displayDate);
var NowHour = dayjs().format("HH");

$("#clearBtn").click(function(events){
  events.preventDefault();
  $("textarea").val("");
  localStorage.clear();
})


$(document).ready(function () {

  $(".saveBtn").click(function(events){
    events.preventDefault();
    var content = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, content);
  })

  $(".time-block").each(function(){
    var timeInt = $(this).attr("id").split("-")[1];

    if(NowHour == timeInt){
      $(this).removeClass("past future").addClass("present");
    }else if(NowHour < timeInt){
      $(this).removeClass("present future").addClass("past");
    }else if(NowHour > timeInt){
      $(this).removeClass("past present").addClass("future");
    }
  })


  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

});
