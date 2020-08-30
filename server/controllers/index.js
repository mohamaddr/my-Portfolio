var path = require("path");
var express = require("express");
var router = express.Router();
var massagesController = require("./massages");
var sendController = require("./send");

router.get("/api", function (req, res) {
  res.json({ message: "Welcome to your DIT341 backend project!" });
});

// Insert routes below
router.use("/api/massages", massagesController);
router.use("/api/send", sendController);

// All other routes redirect to the index.html
router.route("/pro").get(function (req, res) {
  res.sendfile(req.app.get("appPath") + "/profile.html");
});

router.route("/*").get(function (req, res) {
  var relativeAppPath = req.app.get("appPath");
  var absoluteAppPath = path.resolve(relativeAppPath);
  res.sendFile(absoluteAppPath + "/profile.html");
});

module.exports = router;
