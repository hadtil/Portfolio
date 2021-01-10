const expresslib = require('express');
const application = expresslib();
const port = 1357;

var bodyParser = require('body-parser');

application.use(expresslib.static(__dirname + '/css'));

// Passing in a rule to body-parser
application.use(bodyParser.urlencoded({extended:true}));

// Answer is always on the 9th table
// Please think of a Number from (11-99)
// Add the number together
// Subtract the Added number from the Original Number
// Look at the symbols
// I will tell you the answer


application.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

application.get('/table', function(request, response){
  response.sendFile(__dirname + '/table.html');
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
