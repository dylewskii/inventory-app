var express = require("express");
var router = express.Router();

/* GET genres. */
router.get("/", function (req, res, next) {
  res.send("Here are the genres");
});

module.exports = router;
