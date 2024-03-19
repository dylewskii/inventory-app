const Movie = require("../models/movie");
const MovieInstance = require("../models/movieInstance");
const Genre = require("../models/genre");
const TopRated = require("../models/topRatedMovie");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of movie, movie instances, top rated and genre counts (in parallel)
  const [
    numMovies,
    numMovieInstances,
    numAvailableMovieInstances,
    numTopRated,
    numGenres,
  ] = await Promise.all([
    Movie.countDocuments({}).exec(),
    MovieInstance.countDocuments({}).exec(),
    MovieInstance.countDocuments({ status: "Available" }).exec(),
    TopRated.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "ClipFlix",
    movie_count: numMovies,
    movie_instance_count: numMovieInstances,
    movie_instance_available_count: numAvailableMovieInstances,
    top_rated_count: numTopRated,
    genre_count: numGenres,
  });
});

// Display list of all movies.
exports.movie_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie list");
});

// Display detail page for a specific movie.
exports.movie_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Movie detail: ${req.params.id}`);
});

// Display movie create form on GET.
exports.movie_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie create GET");
});

// Handle movie create on POST.
exports.movie_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie create POST");
});

// Display movie delete form on GET.
exports.movie_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie delete GET");
});

// Handle movie delete on POST.
exports.movie_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie delete POST");
});

// Display movie update form on GET.
exports.movie_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie update GET");
});

// Handle movie update on POST.
exports.movie_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie update POST");
});
