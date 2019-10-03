const expresslib = require('express');
const application = expresslib();
const port = 1357;
//const hostname = 127.0.0.2;

// https://www.ramsayhealth.co.uk/weight-loss-surgery/bmi/bmi-formula
// Metric BMI formula
// BMI = Weight (kg) / Height (m)²
// To calculate BMI, the metric formula is your weight in kilograms divided by your height in meters squared.
//
// For example
// If you are 175cm (1.75m) in height and 75kg in weight, you can calculate your BMI as follows:
// 75kg / (1.75m²) = 24.49kg/m²

var bodyParser = require('body-parser');

application.use(expresslib.static(__dirname + '/css'));

// Passing in a rule to body-parser
application.use(bodyParser.urlencoded({extended:true}));

application.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

application.post('/result', function(req, res){
  //  res.send('Successfully Posted');

  // Form handling
  // var a = req.body.inputNumber1;
  // var b = req.body.inputNumber2;
  // var result = Number(a) + Number(b);

  var name = req.body.UserName;
  var wght = Number(req.body.inputWeight);
  var hghtcm = Number(req.body.inputHeight);

  var hght = hghtcm / 100;

  // BMI = Weight (kg) / Height (m)²
  var result = wght / (hght * hght);

  res.send('<h1>Hi ' + name + ', Your BMI is : ' + result + '</h1><br><a href="/">Home</a>');
});

    //
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

application.listen(port, function(){
  console.log("Application is running fine and perfect on port number " + port);
});

// application.listen(port, hostname, function(){
//   console.log("Application is running fine and perfect on hostname & port number " + hostname + ":" + port);
// });
