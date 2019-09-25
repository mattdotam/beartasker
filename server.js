const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
require("./models/Task");
const taskpull = require("./taskpull");

const connectBeartasker = () => {
  return mongoose.connect(`mongodb://localhost:27017/beartasker`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connectBeartasker().catch(e => console.error(e));

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function(req, res) {
  console.log("pong");
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
