var express = require("express");
var router = express.Router();
var controller = require("../controllers/travel");

/* GET traverl pager/ */
router.get("/", controller.travel);

module.exports = router;
