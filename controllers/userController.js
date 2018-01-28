var mongoose = require("mongoose");
var _ = require("underscore-node");
debugger;
//var Tasks = mongoose.model("Tasks");
var User = require('../models/User.js');
var userController = {};
var newOrder = [];
var taskObj = {};

userController.validate = function(req, res) {
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
                res.redirect("/task/?user=" + req.body.name);
            }
        }
    });
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
    var name = (req.query.name != '') ? req.query.name : '';
    var password = (req.query.password != '') ? req.query.password : '';
    var data = {
        name: name,
        password: password
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
module.exports = userController;
