var mongoose = require("mongoose");

var searchResultSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
});
searchResultSchema.index({ title: "text" });

var SearchResult = mongoose.model("SearchResult", searchResultSchema);

module.exports = SearchResult;
