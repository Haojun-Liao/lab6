const db = require('../models/artist.js');

async function getAllArtists(req, res) {
    var data = await db.getAllArtists();
    res.render('artist', { "artist": data[0] });
}
async function addArtist(req, res) {
    var data = req.body;
    await db.addArtist(data.name, data.about, data.image);
    res.redirect("/home");
}

async function deleteArtist(req, res) {
    var id = req.query.id;
    console.log(id);
    await db.deleteArtist(id);
    res.redirect("/home");
}

async function search(req, res) {
    var data = await db.search(req.query.search)
    res.render('artist', { 'artist': data[0] });
}

module.exports = {
    getAllArtists: getAllArtists,
    addArtist: addArtist,
    deleteArtist: deleteArtist,
    search: search,
}