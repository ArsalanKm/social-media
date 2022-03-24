const express = require("express");
const app = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = 8080;
const client = mongodb.MongoClient;

dotenv.config();
// db is service name
client.connect("mongodb://db:27017/social-media", (err, db) => {
  if (err) {
    console.log("database is not connected");
  } else {
    console.log("connected!!");
  }
});

app.get("/", (req, res) => {
  res.json({ hello: "how are today or not " });
});

app.listen(PORT, () => {
  console.log("listening on port 8080");
});
