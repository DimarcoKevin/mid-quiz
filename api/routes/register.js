var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Register page");
});

router.get("/test", function(req, res, next) {
    res.send("test");
});


module.exports = router;