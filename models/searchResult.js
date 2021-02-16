var mongoose = require("mongoose");

var searchResultSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
});

var SearchResult = mongoose.model("SearchResult", searchResultSchema);

module.exports = SearchResult;
