//jshint esversion:6

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var dbname = "todolistDatabase";
mongoose.connect('mongodb://localhost/' + dbname,
                 {useNewUrlParser: true,
                  useUnifiedTopology: true});

const itemsSchema = new mongoose.Schema({
 name: String
});
// var Schema = mongoose.Schema;
// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

// const items = [];

const item = mongoose.model('Item', itemsSchema);

const item1 = new item({
  name:"Welcome to your todoList!!"
});

const item2 = new item({
  name:"Plus button to add todo"
});

const item3 = new item({
  name:"Hit the checkbox to delete the task"
});

const defaultItems = [item1, item2, item3];

app.get("/", function(req, res) {
//const day = date.getDate();

  item.find({}, function(err, foundItems){
    // console.log(foundItems);

    if(foundItems.length === 0){
      item.insertMany(defaultItems, function(err){
        if (err){
          console.log(err);
        } else {
          console.log("Successfully Saved default values");
        }
      });
      res.redirect('/');
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });

  // res.render("list", {listTitle: "Today", newListItems: defaultItems});

});

app.post("/", function(req, res){
  const itemName = req.body.newItem;

  const myNewToDoItem = new item({ name:itemName });

  item.find({name:itemName}, function(err, resultSet){
    if(resultSet.length === 0){
      myNewToDoItem.save();
  //     item.insertOne(myNewToDoItem, function(err){
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log("Successfully saved ToDo item");
  //       }
  //     });
    }
  });
    // items.push(item);
    res.redirect("/");
});

app.post("/delete", function(req, res){
  // console.log(req.body.checkbox);
  const checkedItemID = req.body.checkbox;

  item.findByIdAndRemove(checkedItemID, function(err){
    if (!err) {
      console.log("Successfully deleted checked item");
    }
  });

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
