var mysql = require('mysql2');
require('dotenv/config')
const { env: { HOST, PORT_SQL, USER_SQL, PASSWORD, DATABASE, DATABASE_TEST } } = process;

const connection = mysql.createConnection({
    host: HOST,
    port: PORT_SQL,
    user: USER_SQL,
    password: PASSWORD,
    database: DATABASE
});


const queryConnection = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = { queryConnection, connection }