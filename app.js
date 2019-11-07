//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Load the full build.
const _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var myPosts = [];

app.get("/", function(req, res) {
  res.render("pages/home.ejs", {openingBlurb:homeStartingContent,
                                posts:myPosts});
});

app.get("/about", function(req, res){
  res.render("pages/about.ejs", {openingBlurb:aboutContent});
});

app.get("/contact", function(req, res){
  res.render("pages/contact.ejs", {openingBlurb:contactContent});
});

app.get("/compose", function(req, res){
  res.render("pages/compose.ejs");
});

app.post("/compose", function(req, res){
  var blogTitle = req.body.blogTitle;
  var blogPost = req.body.blogPost;

  myPosts.push({title:blogTitle, comment:blogPost});

  // console.log({title:blogTitle, comment:blogPost});
  // console.log(myPosts);

  res.redirect('/');
});

app.get("/posts/:blogTitle", function(req, res) {
    console.log(req.params.blogTitle);

    var standardTitle = _.lowerCase(req.params.blogTitle);
    console.log(standardTitle);

    //    myArray.find(x => x.id === '45').foo;
    // If you want to find its index instead, use findIndex():
    // findIndex() takes a function as an argument (enabling more sophisticated finds,
    // like say you were looking for the first occurrence of a value with a specific
    // substring instead of just the whole value).
    //    myArray.findIndex(x => x.id === '45');
    // indexOf() just takes the value you're looking for.
    //    myArray.indexOf("Apple");

    myPosts.forEach(function(element) {
      console.log(_.lowerCase(element.title));
    });

    // var result = myPosts.find(({title}) => _.lowerCase(title) === standardTitle);
    var result = myPosts.findIndex(({title}) => _.lowerCase(title) === standardTitle);

    // if (typeof result !== 'undefined'){ // needed for find()
    if (result !== -1){
      console.log("Match Found");
      res.render("pages/post.ejs", {postTitle:myPosts[result].title,
                                    postContent:myPosts[result].comment});
    } else {
      console.log("Match not Found");
      res.redirect('/');
    }

    // res.redirect('/');
});









var myport = 1357;

app.listen(myport, function() {
  console.log("Server started on port " + myport);
});
