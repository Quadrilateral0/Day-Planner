//Dynamic update of current date and time
function currentDay() {
  document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do, YYYY, h:mm:ss a");
}
setInterval(currentDay, 1000);

//Set block color based on time of day using a for loop that runs every minute
var colorTime = function() {
  var time = moment().format("HH");
  var colorArea = $(".form-control");

  for (var i=0 ; i<colorArea.length ; i++) {
    var eachArea = colorArea[i].id;
    var changeArea = document.getElementById(eachArea)
   
    $(colorArea[i].id).removeClass("past, present, future");

    if (eachArea < time) {
        $(changeArea).addClass("past");
      } else if (eachArea > time) {
        $(changeArea).addClass("future");
      } else {
        $(changeArea).addClass("present");
    }
  }
}
setInterval(colorTime(), (60*1000));

//Save text for each time slot to local storage and maintain display text on page refresh
//8am
var saveButton8 = document.getElementById("8am-button");
var text8 = document.getElementById("08");
function saveMessage8() {
  localStorage.setItem("calendartext8", JSON.stringify(text8.value)); 
  };
function renderMessage8() {
  var lastText = JSON.parse(localStorage.getItem("calendartext8"));
  if (lastText !== null) {
    document.getElementById("08").value = lastText;
  } else {
    return;
  }
};
saveButton8.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage8();
  renderMessage8();
  }
);
function init8() {
  renderMessage8();
}
init8();

//9am
var saveButton9 = document.getElementById("9am-button");
var text9 = document.getElementById("09");
function saveMessage9() {
  localStorage.setItem("calendartext9", JSON.stringify(text9.value)); 
  };
function renderMessage9() {
  var lastText = JSON.parse(localStorage.getItem("calendartext9"));
  if (lastText !== null) {
    document.getElementById("09").value = lastText;
  } else {
    return;
  }
};
saveButton9.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage9();
  renderMessage9();
  }
);
function init9() {
  renderMessage9();
}
init9();

//10am
var saveButton10 = document.getElementById("10am-button");
var text10 = document.getElementById("10");
function saveMessage10() {
  localStorage.setItem("calendartext10", JSON.stringify(text10.value)); 
  };
function renderMessage10() {
  var lastText = JSON.parse(localStorage.getItem("calendartext10"));
  if (lastText !== null) {
    document.getElementById("10").value = lastText;
  } else {
    return;
  }
};
saveButton10.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage10();
  renderMessage10();
  }
);
function init10() {
  renderMessage10();
}
init10();

//11am
var saveButton11 = document.getElementById("11am-button");
var text11 = document.getElementById("11");
function saveMessage11() {
  localStorage.setItem("calendartext11", JSON.stringify(text11.value)); 
  };
function renderMessage11() {
  var lastText = JSON.parse(localStorage.getItem("calendartext11"));
  if (lastText !== null) {
    document.getElementById("11").value = lastText;
  } else {
    return;
  }
};
saveButton11.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage11();
  renderMessage11();
  }
);
function init11() {
  renderMessage11();
}
init11();

//12pm
var saveButton12 = document.getElementById("12pm-button");
var text12 = document.getElementById("12");
function saveMessage12() {
  localStorage.setItem("calendartext12", JSON.stringify(text12.value)); 
  };
function renderMessage12() {
  var lastText = JSON.parse(localStorage.getItem("calendartext12"));
  if (lastText !== null) {
    document.getElementById("12").value = lastText;
  } else {
    return;
  }
};
saveButton12.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage12();
  renderMessage12();
  }
);
function init12() {
  renderMessage12();
}
init12();

//1pm
var saveButton1 = document.getElementById("1pm-button");
var text1 = document.getElementById("13");
function saveMessage1() {
  localStorage.setItem("calendartext1", JSON.stringify(text1.value)); 
  };
function renderMessage1() {
  var lastText = JSON.parse(localStorage.getItem("calendartext1"));
  if (lastText !== null) {
    document.getElementById("13").value = lastText;
  } else {
    return;
  }
};
saveButton1.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage1();
  renderMessage1();
  }
);
function init1() {
  renderMessage1();
}
init1();

//2pm
var saveButton2 = document.getElementById("2pm-button");
var text2 = document.getElementById("14");
function saveMessage2() {
  localStorage.setItem("calendartext2", JSON.stringify(text2.value)); 
  };
function renderMessage2() {
  var lastText = JSON.parse(localStorage.getItem("calendartext2"));
  if (lastText !== null) {
    document.getElementById("14").value = lastText;
  } else {
    return;
  }
};
saveButton2.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage2();
  renderMessage2();
  }
);
function init2() {
  renderMessage2();
}
init2();

//3pm
var saveButton3 = document.getElementById("3pm-button");
var text3 = document.getElementById("15");
function saveMessage3() {
  localStorage.setItem("calendartext3", JSON.stringify(text3.value)); 
  };
function renderMessage3() {
  var lastText = JSON.parse(localStorage.getItem("calendartext3"));
  if (lastText !== null) {
    document.getElementById("15").value = lastText;
  } else {
    return;
  }
};
saveButton3.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage3();
  renderMessage3();
  }
);
function init3() {
  renderMessage3();
}
init3();

//4pm
var saveButton4 = document.getElementById("4pm-button");
var text4 = document.getElementById("16");
function saveMessage4() {
  localStorage.setItem("calendartext4", JSON.stringify(text4.value)); 
  };
function renderMessage4() {
  var lastText = JSON.parse(localStorage.getItem("calendartext4"));
  if (lastText !== null) {
    document.getElementById("16").value = lastText;
  } else {
    return;
  }
};
saveButton4.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage4();
  renderMessage4();
  }
);
function init4() {
  renderMessage4();
}
init4();

//5pm
var saveButton5 = document.getElementById("5pm-button");
var text5 = document.getElementById("17");
function saveMessage5() {
  localStorage.setItem("calendartext5", JSON.stringify(text5.value)); 
  };
function renderMessage5() {
  var lastText = JSON.parse(localStorage.getItem("calendartext5"));
  if (lastText !== null) {
    document.getElementById("17").value = lastText;
  } else {
    return;
  }
};
saveButton5.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage5();
  renderMessage5();
  }
);
function init5() {
  renderMessage5();
}
init5();