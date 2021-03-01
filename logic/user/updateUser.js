const { queryConnection } = require('../../config/db')


module.exports = (id, name, email) => {
    //validateFiles
    if (id === undefined) throw new Error('need id')
    if (name.trim() === '') throw new Error('need name')
    if (email.trim() === '') throw new Error('need email')

    return (async () => {


        const existId = await queryConnection(`SELECT * FROM users WHERE users.iduser = '${id}'`)
        if (existId.length === 0) throw new Error('this id dont exist')


        const queryfindEmail = `
        SELECT users.email FROM users
        WHERE users.email='${email}';
        `
        const result = await queryConnection(queryfindEmail)
        if (result.length > 0) throw new Error('this email is alredy register')

        const queryUpdate = `UPDATE users
        SET name='${name}', email='${email}' 
        WHERE users.iduser='${id}'`

        await queryConnection(queryUpdate)

        const queryUser = `SELECT * FROM users WHERE users.iduser = '${id}'`

        return await queryConnection(queryUser)

    })()
}