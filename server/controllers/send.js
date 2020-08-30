const sgMail = require("@sendgrid/mail");
var express = require("express");
var Massage = require("../models/massage.js");
var router = express.Router();
sgMail.setApiKey(
  
 
  "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"
 
);

router.post("/", function(req, res, next) {
  var massage = new Massage(req.body);

  sgMail.send(
    {
      to: "troyxiii@gmail.com",
      from: massage.email,
      subject: massage.subject,
      text: massage.massage
    },
    function(err, json) {
      if (err) {
        return res.send("nooooo");
      }
      res.send("sent!!");
    }
  );
});

module.exports = router;
