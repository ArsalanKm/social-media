const express = require("express");
const app = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const { allowedNodeEnvironmentFlags } = require("process");

const PORT = 8080;
const client = mongodb.MongoClient;

dotenv.config();
// db is service name
mongoose.connect("mongodb://db:27017/social-media", (err, db) => {
  if (err) {
    console.log("database is not connected");
  } else {
    console.log("connected!!");
  }
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routers
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("listening on port 8080");
});
