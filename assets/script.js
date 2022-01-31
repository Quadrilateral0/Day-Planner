//Dynamic update of current date
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//Save text to local storage
var saveButton = document.getElementById("input-group-append");
var text = document.getElementById("form-control");
var textAppend = localStorage.getItem("calendartext");

text.textContent = textAppend;
saveButton.addEventListener("click", function() {
    localStorage.setItem("calendartext", textAppend);
   
  }
);
