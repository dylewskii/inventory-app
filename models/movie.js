const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
  director: {
    type: String,
    minlength: 1,
    maxlength: 255,
  },
  releaseYear: {
    type: Number,
    min: 1800,
    max: new Date().getFullYear(),
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000,
  },
});

movieSchema.virtual("url").get(function () {
  return `/movie/${this._id}`;
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
