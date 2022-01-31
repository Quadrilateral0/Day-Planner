//Dynamic update of current date
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//Save text for each time slot to local storage

//8am
var saveButton8 = document.getElementById("8am-button");
var text8 = document.getElementById("8am");
var textAppend8 = localStorage.getItem("calendartext8");

saveButton8.addEventListener("click", function() {
    localStorage.setItem("calendartext8", text8.value);
  }
);
