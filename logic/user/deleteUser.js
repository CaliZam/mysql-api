const { queryConnection } = require('../../config/db')


module.exports = (id) => {
    //validateFiles
    if (id === undefined) throw new Error('need id')

    return (async () => {
        const existId = await queryConnection(`SELECT * FROM users WHERE users.iduser = '${id}'`)
        if (existId.length === 0) throw new Error('this id dont exist')

        await queryConnection(`DELETE FROM users WHERE users.iduser='${id}';`)
        return { message: `user with id ${id} was deleted sucessefuly` }
    })()
}