//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

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

  var today  = new Date();

  // chosenDay = today;
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

  var day = "";

  if ((day1 === 0) || (day1 === 6)) {
    // res.write("It's a weekend!!<br>");
    // res.sendFile(__dirname + "/weekend.html");
    day = "Weekend";

  } else {
    // res.write("It's a weekday!!<br>");
    // res.sendFile(__dirname + "/weekday.html");
    day = "Weekday";

  }

  // res.write('Selected Day (' + chosenDay +
  //           ') is a ' + days[day1]);
  //res.send();

  // res.render("list.ejs", {kindOfDay:day});
  // res.render("list", {kindOfDay:day, nameOfDay:days[day1]});

  // See https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var options = { weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'};

  var currentDay = chosenDay.toLocaleDateString("en-GB", options);
  // var currentDay = chosenDay.toLocaleDateString("ja-JP", options);
  res.render("list", {kindOfDay:day, nameOfDay:days[day1], newOutput: currentDay});

  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
  // console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
});


app.post('/', function(req, res) {

  var todo = req.body.ToDoItem;

 //  // 'https://xkcd.com/info.0.json'; // Current Comic
 //  // 'https://xkcd.com/614/info.0.json'; // Specific Comic
 //
 //  // Latest comic number as at 2019-10-14 is 2214
 //  var lastComicAvailable = 2216;
 //
 //  if (comic > lastComicAvailable) {
 //    comic = lastComicAvailable;
 //  } else if (comic == 0) {
 //    comic = lastComicAvailable; // Bit of a fudge here!!
 //  }
 //
 //  var BaseURL = 'https://xkcd.com/';
 //  var EndURL = '/info.0.json';
 //
 //  FinalURL = BaseURL + comic + EndURL;
 //
 //  req(FinalURL, function(error, reqresponse, body) {
 //     var data = JSON.parse(body);
 //     var comicImg = data.img;
 //     // var comicTitle = data.title;
 //     var comicTitle = data.safe_title;
 //     var comicAlt = data.alt;
 //     var comicNum = data.num;
 //     var comicYear = data.year;
 //
 //     console.log(comicImg);
 // console.log(todo);

  // res.send("Hello");
  res.send(todo);
  
 //
 //  // ********** TO WRITE MULTIPLE RESPONSES ****************
 //  response.write('<h1>' + comicTitle + ' </h1>');
 //  response.write('<img src="' + comicImg + '" alt="' + comicAlt + '"><br>');
 //  // response.write('<h5>' + comicAlt + '</h5>');
 //  response.write('<h3>' + comicAlt);
 //  response.write('  [from <span style="color:blue;">' + comicYear + ' </span> (#<span style="color:darkorange;">' + comicNum + '</span>)]</h3>');
 //  response.send();
 //
 //  console.log('error:', error); // Print the error if one occurred
 //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 //  // console.log('body:', body); // Print the HTML for the Google homepage.
 //  });

});

var myPort = 1358;
app.listen(myPort, function(){
  console.log('Server started on port ' + myPort);
});
