const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
