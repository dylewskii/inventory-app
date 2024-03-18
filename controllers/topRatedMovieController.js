const TopRatedMovie = require("../models/topRatedMovie");
const asyncHandler = require("express-async-handler");

// Display list of all top rated movies.
exports.top_rated_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie list");
});

// Display detail page for a specific top rated movie.
exports.top_rated_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Top rated movie detail: ${req.params.id}`);
});

// Display top rated movie create form on GET.
exports.top_rated_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie create GET");
});

// Handle top rated movie create on POST.
exports.top_rated_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie create POST");
});

// Display top rated movie delete form on GET.
exports.top_rated_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie delete GET");
});

// Handle top rated movie delete on POST.
exports.top_rated_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie delete POST");
});

// Display top rated movie update form on GET.
exports.top_rated_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie update GET");
});

// Handle top rated movie update on POST.
exports.top_rated_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top rated movie update POST");
});
