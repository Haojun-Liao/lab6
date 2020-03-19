var db = require("../util/database.js");

async function loginCheck(username, password) {
    var data = await db.execute("SELECT * FROM login WHERE Username = ? && Password = ?", [username, password])
    if (data[0].length != 0) {   
        return true;
    }
    return false;
}

module.exports = {
    loginCheck:loginCheck
}