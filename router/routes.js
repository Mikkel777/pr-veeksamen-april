const express = require("express");
const router = express.Router();
const vindController = require("../controllers/vindController");
const Turnering = require("../models/Turnering");
const { requireLogin, isAdmin } = require("../middleware/auth");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/signup", (req, res)=> {
    res.render("signup");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/faq", (req, res)=> {
  res.render("faq");
});

//Alle sider
router.get("/turneringer", async (req, res) => {
  const turneringer = await Turnering.find();
  console.log(turneringer);
  res.render("turneringer", { turneringer });
});

router.get("/kamper", (req, res) => {
  const kamper = [
    { lag1: "Lag A", lag2: "Lag B", resultat: "2-1" },
    { lag1: "Lag C", lag2: "Lag D", resultat: "0-0" }
  ];
  res.render("kamper", { kamper });
});

router.get("/lag", (req, res) => {
  const lag = [
    { navn: "Vind IL G16" },
    { navn: "Vind IL J14" }
  ];
  res.render("lag", { lag });
});

//admin routes
router.get("/admin", requireLogin, isAdmin, (req, res) => {
  res.render("admin");
});

router.get("/admin/opprett-turnering", requireLogin, isAdmin, (req, res) => {
  res.render("opprett-turnering");
});

router.post("/admin/opprett-turnering", requireLogin, isAdmin, async (req, res) => {
    const { navn, startdato, sluttdato, sted, sport } = req.body;

    await Turnering.create({
      navn,
      startdato: new Date(startdato),
      sluttdato: sluttdato ? new Date(sluttdato) : null,
      sted,
      sport
    });
  res.redirect("/turneringer");
});

//logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

//post
router.post("/login", vindController.loginUser);
router.post("/signup", vindController.registerUser);

module.exports = router;