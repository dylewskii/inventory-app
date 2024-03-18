const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

// GET movie home page.
router.get("/", movieController.movie_list);

// GET request for creating a Movie.
router.get("/create", movieController.movie_create_get);

// POST request for creating Movie.
router.post("/create", movieController.movie_create_post);

// GET request to delete Movie.
router.get("/:id/delete", movieController.movie_delete_get);

// POST request to delete Movie.
router.post("/:id/delete", movieController.movie_delete_post);

// GET request to update Movie.
router.get("/:id/update", movieController.movie_update_get);

// POST request to update Movie.
router.post("/:id/update", movieController.movie_update_post);

// GET request for one Movie.
router.get("/:id", movieController.movie_detail);

module.exports = router;
