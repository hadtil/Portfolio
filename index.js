const expresslib = require('express');
const application = expresslib();
const port = 1357;

var bodyParser = require('body-parser');
var req = require('request');

application.use(expresslib.static(__dirname + '/'));

// Passing in a rule to body-parser
application.use(bodyParser.urlencoded({
  extended: true
}));

application.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

application.post('/', function(request, response) {
  // response.send("Hello");
  // var x = request.body.crypto;
  // var y = request.body.fiat;
  // response.send(x+y);
  // // response.send(request.body.crypto);
  // // console.log(request.body.crypto);
  // console.log(x + y);

  var euro = "EUR";
  var pound = "GBP";
  var dollar = "USD";
  var bitcoin = "BTC";
  var etherium = "ETH";
  var lite = "LTC";

  var crypto = request.body.crypto;
  var fiat = request.body.fiat;

  // var BaseURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';
  var BaseURL = 'https://xkcd.com/';

  // '614/info.0.json';

  // 'https://xkcd.com/info.0.json'; // Current Comic
  // 'https://xkcd.com/614/info.0.json'; // Specific Comic

  var FinalURL = BaseURL + crypto + fiat;

  var goal = Number(request.body.CurrencyUnits);

    // var url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
  // var url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

  // req('http://www.google.com', function (error, response, body) {
  req(FinalURL, function(error, reqresponse, body) {
    var data = JSON.parse(body);
    var datex = data.display_timestamp;
    // var price = data.high;
    var price = data.last;
    // console.log(data);
    // console.log(price);

    // response.send(String(price));



    // ********** TO WRITE MULTIPLE RESPONSES ****************
    response.write('<h1> The current date is ' + datex + ' </h1>');
    response.write('<h3>The price of ' + crypto + "&nbsp;is " + price + fiat + '</h3>');
    response.write('<h2><span style="color:blue;">' + goal + ' </span><span style="color:darkorange;">' + crypto + '</span> amounts to <span style="color:red;">' + price * goal +'</span><span style="color:darkorange;"> ' + fiat + '</span></h2>');
    response.send();



    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
});



//
// application.post('/result', function(req, res){
// //  res.send('Successfully Posted');
//
// // Form handling
// //var a = req.body.inputNumber1;
// //var b = req.body.inputNumber2;
// //var result = Number(a) + Number(b);
//
// var a = Number(req.body.inputNumber1);
// var b = Number(req.body.inputNumber2);
// var result = a + b;
//
//   res.send('<h1>The result is : ' + result + '</h1>');
// });


// application.post('/welcome', function(request, response){
//   var fname = request.body.firstName;
//   var lname = request.body.lastName;
//   response.send('<h1>Hello ' + fname + ' ' + lname + ', your super hero name is ' + heroes.random() + '. Please stay away from the super villain ' + villains.random() +'.</h1><br>' + '<a href="/">Return Home</a>');
// });
//
// application.get('/heroes', function(req, res){
//   res.send('<a href="/">Home</a><br><h1>' + heroes.random() + "</h1>");
// });
//
// application.get('/villain', function(req, res){
//   res.send('<a href="/">Home</a><br><h1 style="color:red;">' + villains.random() + "</h1>");
// });

application.listen(port, function() {
  console.log("Application is running fine and perfect on port number " + port);
});
