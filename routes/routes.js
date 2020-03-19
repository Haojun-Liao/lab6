const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController.js')
const loginController = require("../controllers/loginController.js")

router.get("/", (req, res) => {
    res.render('login', {layout:'login-layout'});
})

router.get("/home", (req, res) => {
    artistController.getAllArtists(req,res);
})

router.post("/add", (req, res) => {
    artistController.addArtist(req,res);
})

router.get("/delete", (req, res) => {
    artistController.deleteArtist(req, res);
})

router.get("/search", (req,res) => {
    artistController.search(req,res)
})

router.get("/login", (req,res) => {
    loginController.login(req,res)
})

module.exports = router;

