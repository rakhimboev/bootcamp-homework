function currentTime() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  // UTC (Greenwich Mean Time) hour
  var utchr = d.getUTCHours();

  // Calculate time difference between local hour and GMT hour
  var timeDiff = hr - utchr;

  // Adjust time difference to be positive if negative
  var adjTimeDiff = timeDiff < 0 ? timeDiff + 24 : timeDiff;

  // Determine time zone based on the time difference
  var timeZone = "";
  switch (adjTimeDiff) {
    case 5:
      timeZone = "ET"; // Eastern Time (US & Canada)
      break;
    case 6:
      timeZone = "CT"; // Central Time (US & Canada)
      break;
    case 7:
      timeZone = "MT"; // Mountain Time (US & Canada)
      break;
    case 8:
      timeZone = "PT"; // Pacific Time (US & Canada)
      break;
    default:
      timeZone = "Unknown Time Zone"; // Handle other cases
  }

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }

  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone; // Added timeZone to the display

  document.getElementById("clock").innerText = time;
  setInterval(currentTime, 1000);
}

currentTime();
