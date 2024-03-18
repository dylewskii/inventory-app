const express = require("express");
const router = express.Router();

const topRatedMovieController = require("../controllers/topRatedMovieController");

// GET request for list of all Top Rated Movie.
router.get("/", topRatedMovieController.top_rated_list);

// GET request for creating a Top Rated Movie.
router.get("/create", topRatedMovieController.top_rated_create_get);

//POST request for creating Top Rated Movie.
router.post("/create", topRatedMovieController.top_rated_create_post);

// GET request to delete Top Rated Movie.
router.get("/:id/delete", topRatedMovieController.top_rated_delete_get);

// POST request to delete Top Rated Movie.
router.post("/:id/delete", topRatedMovieController.top_rated_delete_post);

// GET request to update Top Rated Movie.
router.get("/:id/update", topRatedMovieController.top_rated_update_get);

// POST request to update Top Rated Movie.
router.post("/:id/update", topRatedMovieController.top_rated_update_post);

// GET request for one Top Rated Movie.
router.get("/:id", topRatedMovieController.top_rated_detail);

module.exports = router;
