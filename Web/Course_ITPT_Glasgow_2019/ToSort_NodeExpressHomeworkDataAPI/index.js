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

  var comic = Number(request.body.ComicNumber);

  // 'https://xkcd.com/info.0.json'; // Current Comic
  // 'https://xkcd.com/614/info.0.json'; // Specific Comic

  // Latest comic number as at 2019-10-14 is 2214
  var lastComicAvailable = 2214;

  if (comic > lastComicAvailable) {
    comic = lastComicAvailable;
  } else if (comic == 0) {
    comic = lastComicAvailable; // Bit of a fudge here!!
  }

  var BaseURL = 'https://xkcd.com/';
  var EndURL = '/info.0.json';

  FinalURL = BaseURL + comic + EndURL;

  req(FinalURL, function(error, reqresponse, body) {
     var data = JSON.parse(body);
     var comicImg = data.img;
     // var comicTitle = data.title;
     var comicTitle = data.safe_title;
     var comicAlt = data.alt;
     var comicNum = data.num;
     var comicYear = data.year;

     console.log(comicImg);
     console.log(comicTitle);

 // response.send(String(price));

  // ********** TO WRITE MULTIPLE RESPONSES ****************
  response.write('<h1>' + comicTitle + ' </h1>');
  response.write('<img src="' + comicImg + '" alt="' + comicAlt + '"><br>');
  // response.write('<h5>' + comicAlt + '</h5>');
  response.write('<h3>' + comicAlt);
  response.write('  [from <span style="color:blue;">' + comicYear + ' </span> (#<span style="color:darkorange;">' + comicNum + '</span>)]</h3>');
  response.send();

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  });

});

application.listen(port, function() {
  console.log("Application is running fine and perfect on port number " + port);
});
