const Turnering = require("../models/Turnering");

exports.getTurneringer = async (req, res) => {
    const turneringer = await Turnering.find();

    const varsler = [];
        turneringer.forEach(t => {
        const start = new Date(t.startdato);
        const now = new Date();
        const diff = (start.getTime() - now.getTime()) / (1000 * 60 * 60);
    if (diff < 48) {
        varsler.push(`Turneringen "${t.navn}" starter snart!`);
    }
});
    res.render("turneringer", { turneringer, varsler });
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