const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./models");
const fetchResults = require("./utils");
// setInterval(fetchResults, 10000);

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
