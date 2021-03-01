const { queryConnection } = require('../../config/db')


module.exports = () => {
    //query
    const sql = `
    SELECT * FROM users`

    return (async () => {
        const result = await queryConnection(sql)
        if (result.length === 0) throw new Error('any user found!')
        return result
    })()
}