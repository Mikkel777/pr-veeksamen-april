const express = require("express");
const Lag = require("../models/Lag")

exports.getLag = async (req, res) =>{
    const lag = await Lag.find();
    res.render("lag", {lag});
};

exports.getOpprettLag = (req, res) => {
    res.render("opprett-lag");
};

exports.createLag = async (req, res) => {
  const {navn, kontaktNavn, kontaktTelefon} = req.body;
    
  await Lag.create({
    navn,
    kontaktNavn,
    kontaktTelefon
  });

    res.redirect("/lag");
};

