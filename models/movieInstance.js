const mongoose = require("mongoose");

const movieInstanceSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  status: {
    type: String,
    enum: ["Available", "On Loan", "Reserved", "Maintenance"],
    default: "Available",
  },
});

movieInstanceSchema.virtual("url").get(function () {
  return `/movies/${this._id}`;
});

const MovieInstance = mongoose.model("MovieInstance", movieInstanceSchema);

module.exports = MovieInstance;
