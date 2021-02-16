const dotenv = require("dotenv");
const request = require("request");
const db = require("./models");
dotenv.config();
let ROOT_API_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cricket&type=video&order=date";

function generateApiUrl() {
  ROOT_API_URL += "&key=" + process.env.API_KEY;
  ROOT_API_URL +=
    "&publishedAfter=" + new Date(Date.now() - 10000).toISOString();
  return ROOT_API_URL;
}

function fetchResults() {
  request.get(generateApiUrl(), (error, response, body) => {
    console.log(JSON.parse(body));
    let result = JSON.parse(body).items.map((item) => {
      item.snippet.thumbnail = item.snippet.thumbnails.default.url;
      return item.snippet;
    });
    db.SearchResult.insertMany(result);
  });
}

module.exports = fetchResults;
