var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var FEMICIDES_COLLECTION = "femicides";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// FEMICIDES API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/femicides"
 *    GET: returns all femicides
 *    POST: add a new femicide
 */

app.get("/api/femicides", function(req, res) {
  db.collection(FEMICIDES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get femicides.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/femicides", function(req, res) {
  var newFemicide = req.body;
  newFemicide.creationDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(FEMICIDES_COLLECTION).insertOne(newFemicide, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new femicide.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/femicides/:id"
 *    GET: find femicide by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/femicides/:id", function(req, res) {
  db.collection(FEMICIDES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get femicide");
    } else {
      res.status(200).json(doc);
    }
  });
});

/*app.put("/api/contacts/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update contact");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/contacts/:id", function(req, res) {
  db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete contact");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});*/