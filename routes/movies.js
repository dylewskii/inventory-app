var express = require("express");
var router = express.Router();

/* GET all movies. */
router.get("/", function (req, res, next) {
  res.send("Here are all available movies");
});

module.exports = router;
