const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User model
const User = require("../../models/User");

// @route       POST api/users
// @description Register new user
// @access      Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  const user_balance = 0;

  //Validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
      user_balance,
    });

    //Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  register_date: user.register_date,
                  user_balance: user_balance,
                },
              });
            }
          );
        });
      });
    });
  });
});

// @route       POST api/users/updatebalance
// @description Update user balance
// @access      Public
router.post("/updatebalance", (req, res) => {
  const { email, user_balance } = req.body;

  User.findOneAndUpdate(
    { email },
    { $inc: { user_balance: user_balance } },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
