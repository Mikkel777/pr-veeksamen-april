const Turnering = require("../models/Turnering");

exports.getTurneringer = async (req, res) => {
  const turneringer = await Turnering.find();
  res.render("turneringer", { turneringer });
};

exports.getOpprettTurnering = (req, res) => {
  res.render("opprett-turnering");
};

exports.createTurnering = async (req, res) => {
  const { navn, startdato, sluttdato, sted, sport } = req.body;

  await Turnering.create({
    navn,
    startdato: new Date(startdato),
    sluttdato: sluttdato ? new Date(sluttdato) : null,
    sted,
    sport
  });

  res.redirect("/turneringer");
};