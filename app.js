const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./models");

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
// console.log(new Date().toISOString());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
