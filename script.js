ShowTime = () => {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var session = "AM";

  if (hour == 0) {
    hour = 12; //12 hour format
  }

  // if(hour<10){
  //     hour = "0" + hour;
  // }

  // if(minutes<10){
  //     minutes = "0" + minutes;
  // }

  // if(seconds<10){
  //     seconds = "0" + seconds;
  // }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  // ternary operator
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("DigitalClock").innerHTML =
    hour + ":" + minutes + ":" + seconds + " " + session;

  setTimeout(ShowTime, 1000);
};
ShowTime();
