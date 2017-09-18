// var express = require("express");

// var router = express.Router();

// var users = require("../app/models/users.js");

// router.get("/", function(req, res) {
//   users.all(function(data) {
//     var hbsObject = {
//       users: data
//     };
//     console.log(hbsObject);
//     res.render("users", hbsObject);
//   });
// });

// router.post("/survey", function(req, res) {
//   users.create([
//     "firstname", "lastname", "username", "about", "email", "password"
//   ], [
//     req.body.firstname, req.body.lastname, req.body.username, req.body.about, req.body.email, req.body.password
//   ], function() {
//     res.redirect("/");
//   });
// });


// module.exports = router;