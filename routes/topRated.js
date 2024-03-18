var express = require("express");
var router = express.Router();

/* GET favorites. */
router.get("/", function (req, res, next) {
  res.send("Here are the top rated movies");
});

module.exports = router;
