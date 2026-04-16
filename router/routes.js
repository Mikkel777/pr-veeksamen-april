const express = require("express");
const router = express.Router();
const vindController = require("../controllers/vindController");
const turneringController = require("../controllers/turneringController");
const { requireLogin, isAdmin } = require("../middleware/auth");
const lagController = require("../controllers/lagController");

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
router.get("/turneringer", turneringController.getTurneringer);

router.get("/kamper", (req, res) => {
  res.render("kamper", { kamper: [] });
});

router.get("/lag", lagController.getLag);

//admin routes
router.get("/admin", requireLogin, isAdmin, (req, res) => {
  res.render("admin");
});

router.get("/admin/opprett-kamp", requireLogin, isAdmin, (req, res) => {
  res.render("opprett-kamp");
});

router.get("/admin/opprett-kamp", requireLogin, isAdmin, (req, res) => {
  const {lag1, lag2, tidspunkt, resultat} = req.body;

  const kamp = {
    lag1,
    lag2,
    tidspunkt: new Date(tidspunk),
    resultat
  }
  res.redirect("/kamper");
});

router.get("/admin/opprett-turnering", requireLogin, isAdmin, turneringController.getOpprettTurnering);
router.post("/admin/opprett-turnering", requireLogin, isAdmin, turneringController.createTurnering);

router.get("/admin/opprett-lag", requireLogin, isAdmin, lagController.getOpprettLag);
router.post("/admin/opprett-lag", requireLogin, isAdmin, lagController.createLag);

//logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

//post
router.post("/login", vindController.loginUser);
router.post("/signup", vindController.registerUser);

module.exports = router;