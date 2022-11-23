function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var session = "AM";
  //if it's 12 AM
  if(hours==0) {
    hours = 12;
  }
  if(hours>12) {
    hours = hours-12;
    session="PM";
  }
  hours = hours<10 ? "0"+hours : hours;
  minutes = minutes<10 ? "0"+minutes : minutes;
  seconds = seconds<10 ? "0"+seconds : seconds;
  var time = hours + ":" + minutes + ":" + seconds + " " + session;
  document.getElementById("show-time-h2").innerHTML = time;
  // document.getElementById('show-time-h2').textContent = time;
  // document.getElementById("seconds").innerHTML = seconds;
  // document.getElementById("minutes").innerHTML = minutes;
  // document.getElementById("hours").innerHTML = hours;
  // document.getElementById("session").innerHTML = session;
}
setInterval(showTime, 1000);
