var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  models.Member.findAll().then(function(members) {
    res.json(members);
  })
});

// router.post("/", function(req, res) {
//   models.Member.create({
//     email: req.body.email
//   }).then(function(e) {
//     console.log("done", e)
//     res.redirect("/");
//   })
//   .catch(function(e) {
//     console.log("error", e)
//   });
// });

module.exports = router;
