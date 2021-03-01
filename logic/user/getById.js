// const { queryConnection } = require('../../config/db')
const User = require('../../models/User')

module.exports = (id) => {
    //validate fields
    if (id === '') throw new Error('need id of user')

    //query
    // const sql = `
    // SELECT * FROM users
    // WHERE iduser = '${id}'`

    return (async () => {
        const result = await User.findById(id)
        // const result = await queryConnection(sql)
        if (result.length === 0) throw new Error('any user find')
        return result
    })()
}