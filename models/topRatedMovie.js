const mongoose = require("mongoose");

const topRatedMovieSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
});

const TopRatedMovie = mongoose.model("TopRatedMovie", topRatedMovieSchema);

module.exports = TopRatedMovie;
