const { queryConnection } = require('../config/db')

module.exports = {
    findById: async (iduser) => {
        console.log(iduser)
        return await queryConnection(`SELECT * FROM users WHERE iduser ='${iduser}'`)
    },
    find: async ({ iduser, name, email }) => {
        var typeSearch;
        if (iduser) {
            typeSearch = 'iduser'
        } else if (name) {
            typeSearch = 'name'
        } else if (email) {
            typeSearch = 'email'
        } else {
            throw Error('any propriety found')
        }
        return await queryConnection(`SELECT * FROM users WHERE ${typeSearch} ='${iduser || name || email}'`)
    },
    create: async ({ iduser, name, email }) => {
        return await queryConnection(`INSERT INTO users
        VALUES ('${iduser}', '${name}', '${email}')`)
    }
}