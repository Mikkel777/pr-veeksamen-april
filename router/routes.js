const express = require("express");
const router = express.Router();
const vindController = require("../controllers/vindController");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/signup", (req, res)=> {
    res.render("signup");
});

router.get("/login", (req, res) => {
    res.render("login");
});

//post
router.post("/login", vindController.loginUser);
router.post("/signup", vindController.registerUser);

module.exports = router;