const db = require('../models/login.js');

async function login(req, res) {
    var success = await db.loginCheck(req.query.username, req.query.password);
    if (success) {
        res.redirect("/home")
    }
    else {
        res.render("login", {layout:"login-layout", loginFailed:true})
    }
}

module.exports = {
    login: login
}