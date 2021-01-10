//jshint esversion:6
// The above comment is to turn off certain warnings for the
// js-hint Atom editor plugin - ones not relevant to version 6

// Code taken from MongoDB documentation at:
// http://mongodb.github.io/node-mongodb-native/3.2/tutorials/connect/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Use assert for testing and warnings.

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name - creating a new database
const dbName = 'fruits';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // insertDocuments(db, function() {
  findDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name : "apple",
      score : 8,
      review : "Apples are great"
    },
    {
      name : "oranges",
      score : 6,
      review : "Oranges are sour"
    },
    {
      name : "bananas",
      score : 9,
      review : "Great Stuff"
    },
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};


const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  // Creating an array for results
  collection.find({}).toArray(function(err, fruitsArr) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruitsArr);
    callback(fruitsArr);
  });
};
