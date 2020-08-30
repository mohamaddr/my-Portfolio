var express = require("express");
var router = express.Router();
var Massage = require("../models/massage.js");

router.get("/", function(req, res, next) {
  Massage.find(function(err, massages) {
    if (err) {
      return next(err);
    }
    res.json({ massages: massages });
  });
});

// Create a new massage
router.post("/", function(req, res, next) {
  var massage = new Massage(req.body);
  massage.save(function(err) {
    if (err) {
      return next(err);
    }
    res.status(201).json(massage);
  });
});

module.exports = router;
