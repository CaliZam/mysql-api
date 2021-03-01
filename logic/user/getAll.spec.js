const { expect } = require('chai');
const { connection, queryConnection } = require('../../config/db')
require('dotenv').config();

const { random } = Math;

const getAll = require('./getAll');



describe('Server Logic Register User', () => {
    before(() => {
        connection.connect()
    })


    let name, email, usersCreated = []
    beforeEach(async () => {
        await queryConnection(`DELETE FROM users;`)
        for (let i = 1; i <= 10; i++) {
            name = `name-${random()}`;
            email = `email${random()}@mail.com`;

            await queryConnection(`INSERT INTO users
            VALUES (${i}, '${name}', '${email}')`)

            const [result] = await queryConnection(`SELECT * FROM users WHERE users.iduser = ${i}`)
            if (result) {
                usersCreated.push(result.iduser)
            }
        }
    })

    it('Success to getAll', async () => {


        const users = await getAll();

        expect(users).to.exist;
        expect(users.length).to.equal(10);
        let i = 0;
        users.forEach(user => {
            expect(user.iduser).to.equal(usersCreated[i])
            expect(user.name).to.exist
            expect(user.email).to.exist
            i++
        })

    })

    it('Should fail to find any user', async () => {
        await queryConnection(`DELETE FROM users;`)
        try {
            await getAll()
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.an.instanceOf(Error);
            expect(error.message).to.equal('any user found!')
        }
    })

    afterEach(async () => {
        await queryConnection(`DELETE FROM users;`)
    })

    after(() => {
        connection.destroy()
    })
})