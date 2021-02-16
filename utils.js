const dotenv = require("dotenv");
dotenv.config();
const ROOT_API_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cricket&type=video&order=date";

function generateApiUrl() {
  ROOT_API_URL += "&key" + process.env.API_KEY;
  return ROOT_API_URL;
}

module.exports = generateApiUrl;
