const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255,
  },
});

genreSchema.virtual("url").get(function () {
  return `/genres/${this._id}`;
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
