//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

  var chosenDay = new Date('August 19, 1975 23:15:30');
  var day1 = birthday.getDay();
  // Sunday - Saturday : 0 - 6
  var days = ["Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"];

  res.write('Selected Day (' + chosenDay +
            ') is a ' + days[day1]);
  res.send();
});


var myPort = 1358;
app.listen(myPort, function(){
  console.log('Server started on port ' + myPort);
});
