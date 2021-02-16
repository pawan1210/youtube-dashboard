const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("useFindAndModify", false);
mongoose.set("debug", true);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = Promise;
module.exports.SearchResult = require("./searchResult");
