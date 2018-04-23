var mongoose = require("mongoose");
var _ = require("underscore-node");
debugger;
//var Tasks = mongoose.model("Tasks");
var User = require('../models/User.js');
var userController = {};
var newOrder = [];
var taskObj = {};

userController.validate = function(req, res) {
<<<<<<< HEAD
    User.findOne({
        name: req.body.name,
        password: req.body.password
    }).exec(function(err, task) {
        if (err) {
            console.log("Error:", err);
            res.redirect("/");
        } else {
            if (task == null) {
                res.redirect("/");
            } else {
                req.session.user = req.body.name;
                res.redirect("/task/?user=" + req.body.name);
            }
        }
    });
=======
  User.findOne({
    name: req.body.name,
    password: req.body.password
  }).exec(function(err, task) {
    if (err) {
      console.log("Error:", err);
      res.redirect("/");
    } else {
      if (task == null) {
        res.redirect("/");
      } else {
        req.session.user = req.body.name;
        res.redirect("/task");
      }
    }
  });
>>>>>>> 1c600a1c2a63c127aa7f57755dcf7019eaa23f49
};

userController.list = function(req, res) {
  User.find({}).exec(function(err, user) {
    if (err) {
      console.log("Error:", err);
      res.redirect("/");
    } else {
      if (user == null) {
        res.redirect("/");
      } else {
        res.json(user);
      }
    }
  });
};

userController.add = function(req, res) {
  debugger;
  var name = (req.body.name != '') ? req.body.name : '';
  var password = (req.body.password != '') ? req.body.password : '';
  var username = (req.body.userName != '') ? req.body.userName : '';
  var data = {
    name: name,
    password: password,
    username: username
  }
  var user = new User(data);
  user.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully added user");
      res.redirect("/");
    }
  });
};

userController.logout = function(req, res) {
  debugger;
  req.session.user = undefined;
  res.redirect("/");
};
userController.logout = function(req, res) {
    debugger;
    req.session.user = undefined;
    res.redirect("/");

};
module.exports = userController;
