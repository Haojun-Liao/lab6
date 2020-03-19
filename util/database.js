const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'X2DrElufsc',
    database: 'X2DrElufsc',
    password:'fks5p2lCzF',
    port: 3306
})

module.exports = pool.promise();



