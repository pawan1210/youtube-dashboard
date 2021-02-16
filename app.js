const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./models");
const utils = require("./utils");
setInterval(utils.fetchResults, 10000);

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", async (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  var sort_by = req.query.sort_by ? req.query.sort_by : "date";
  var videos = await utils.getPaginatedResults(
    req.query.search_query,
    page,
    sort_by
  );
  console.log(req.query.sort_by);
  res.render("home", {
    videos: videos,
    search_query: req.query.search_query,
    page: parseInt(page),
    sort_by: sort_by,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
