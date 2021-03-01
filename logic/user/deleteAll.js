const { queryConnection } = require('../../config/db')


module.exports = () => {
    return (async () => {
        await queryConnection(`DELETE FROM users;`)
        return { message: "all users deleted!" }
    })()
}