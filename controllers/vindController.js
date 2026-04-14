const express = require("express");
const bcrypt = require("bcrypt");
const users = [];

exports.registerUser = async (req, res) => {
  const { username, password, confirm } = req.body;

    if (password !== confirm) {
    return res.send("Passordene er ikke like");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.render("index");
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if(!user) {
    return res.send("Feil inlogging");
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    res.render("index");
  } else {
    res.send("Feil inlogging");
  }
};