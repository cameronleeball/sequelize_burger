//API and HTML Routes (look to cats app for guidance)
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var Sequelize = require("sequelize");
var Burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.



// Routes
// =============================================================
router.get("/", function (req, res) {
  Burger.findAll({}).then(function (data) {
    // results are available to us inside the .then
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {

  console.log("New Burger Data:");
  console.log(req.body);

  Burger.create({
    // routeName: req.body.routeName,
    burger_name: req.body.name,
    devoured: req.body.devoured
  }).then(function (results) {

    res.redirect("/");
  });

});
router.post("/", function (req, res) {
  Burger.update([
    "burger_name", "devoured"
  ], [
      req.body.burger_name, req.body.devoured
    ], function () {
      res.redirect("/");
    });
});
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  Burger.update({
    devoured: req.body.devoured
  }, condition, function () {
    res.redirect("/");
  });
});
router.delete("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  Burger.delete(condition, function () {
    res.redirect("/");
  });
});

module.exports = router;










// router.get("/", function (req, res) {
//   burger.selectAll(function (data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
// router.post("/", function (req, res) {
//   burger.insertOne([
//     "burger_name", "devoured"
//   ], [
//       req.body.burger_name, req.body.devoured
//     ], function () {
//       res.redirect("/");
//     });
// });
// router.put("/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function () {
//     res.redirect("/");
//   });
// });
// router.delete("/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function () {
//     res.redirect("/");
//   });
// });
// // Export routes for server.js to use.
