const MovieInstance = require("../models/movieInstance");
const asyncHandler = require("express-async-handler");

// Display list of all movie instances.
exports.movie_instance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance list");
});

// Display detail page for a specific movie instance.
exports.movie_instance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Movie instance detail: ${req.params.id}`);
});

// Display movie instance create form on GET.
exports.movie_instance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance create GET");
});

// Handle movie instance create on POST.
exports.movie_instance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance create POST");
});

// Display movie instance delete form on GET.
exports.movie_instance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance delete GET");
});

// Handle movie instance delete on POST.
exports.movie_instance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance delete POST");
});

// Display movie instance update form on GET.
exports.movie_instance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance update GET");
});

// Handle movie instance update on POST.
exports.movie_instance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Movie instance update POST");
});
