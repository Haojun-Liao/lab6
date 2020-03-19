var db = require("../util/database.js")

async function getAllArtists() {
    try {
        var data = await db.execute('select * from Artists ORDER BY name');
        return data;
    }
    catch (err) {
        console.log(err)
    }
}

async function addArtist(name, about, image) {
    try {
        console.log({name, about, image});
        await db.execute('insert into Artists (name,about,image) VALUES (?, ?, ?)', [name, about, image]);
    } catch (err) {
        console.log(err)
    }
}

async function deleteArtist(id) {
    try {
        await db.execute('delete from Artists where ID = ?', [id]);
        await db.execute('UPDATE Artists  SET ID = ID-1 WHERE ID>? ORDER BY ID', [id]);
    } catch (err) {
        console.log(err)
    }
}

async function search(string) {
    try{
        var data = await db.execute("SELECT * FROM Artists where Name like ?",['%' + string + '%'])
        return data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllArtists: getAllArtists,
    addArtist: addArtist,
    deleteArtist: deleteArtist,
    search: search,
}