//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

  // Taken from: https://stackoverflow.com/questions/31378526/generate-random-date-between-two-dates-and-times-in-javascript/31379536#31379536
  var myRandomDateGenerator =
         function(rangeOfDays, startHour, hourRange){
              var today = new Date(Date.now());
              return new Date(today.getYear() + 1900,
                              today.getMonth(),
                              today.getDate() +
                                  Math.random() * rangeOfDays,
                              Math.random() * hourRange +
                                  startHour,
                              Math.random() * 60);
              //return new Date(2018, 11, 24, 10, 33, 30, 0);
              // return "Hello There";
  };

  var chosenDay = myRandomDateGenerator(30,8,2);
  // res.write('<html>' + chosenDay.toString() + '<br>');

  // var chosenDay = new Date('August 19, 1975 23:15:30');
  var day1 = chosenDay.getDay();
  // Sunday - Saturday : 0 - 6
  var days = ["Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"];

  if ((day1 === 0) || (day1 === 6)) {
    // res.write("It's a weekend!!<br>");
    res.sendFile(__dirname + "/weekend.html");
  } else {
    // res.write("It's a weekday!!<br>");
    res.sendFile(__dirname + "/weekday.html");
  }

  // res.write('Selected Day (' + chosenDay +
  //           ') is a ' + days[day1]);
  //res.send();

});


var myPort = 1358;
app.listen(myPort, function(){
  console.log('Server started on port ' + myPort);
});
