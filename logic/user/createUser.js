const { queryConnection } = require('../../config/db')
const User = require('../../models/User')

module.exports = (name, email) => {
    //validateFiles
    console.log({ name, email })
    if (name.trim() === '') throw new Error('need name')
    if (email.trim() === '') throw new Error('need email')

    return (async () => {
        let iduser;

        const queryCount = `SELECT iduser FROM users ORDER BY iduser DESC LIMIT 1`
        const count = await queryConnection(queryCount)
        if (count.length === 0) {
            iduser = 0
        } else {
            [{ iduser }] = count
        }


        // const result = await User.find({ email })
        // if (result.length > 0) throw new Error('this email is alredy register')

        const insert = `INSERT INTO users
        VALUES (${iduser + 1}, '${name}', '${email}')`

        await queryConnection(insert)

        const queryUser = `SELECT * FROM users WHERE users.iduser = ${iduser + 1}`

        return await queryConnection(queryUser)

    })()
}