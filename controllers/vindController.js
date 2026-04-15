const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { username, password, confirm} = req.body;

  if (password !== confirm) {
    return res.send("Passord er ikke det samme");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User ({
    username,
    password: hashedPassword,
    role: "user"
  });

  await newUser.save();

  res.redirect("/login")
};

exports.loginUser = async (req, res) => {
  const {username, password} = req.body;

  const user = await User.findOne({username});

  if(!user) {
    return res.send("Feil inlogging informasjon");
  }

  const match = await bcrypt.compare(password, user.password);

  if(match) {
    req.session.user = user;
    res.redirect("/");
  } else {
    res.send("Feil informasjon");
  }
};