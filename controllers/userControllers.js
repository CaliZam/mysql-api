const { getById, getAll, createUser, updateUser, deleteUser, deleteAll } = require('../logic/user')

module.exports = {
    getUser: (req, res) => {
        const { id } = req.params
        try {
            getById(id)
                .then(result => res.send(result))
                .catch((error) => res.status(404).send({ "error": error.message }))
        } catch (error) {
            res.status(400).send({ "error": error.message })
        }
    },
    getAllUser: (req, res) => {
        try {
            getAll()
                .then(result => res.send(result))
                .catch((error) => res.status(404).send({ "error": error.message }))
        } catch (error) {
            res.status(400).send({ "error": error.message })
        }
    },
    createUser: (req, res) => {
        const { name, email } = req.body
        try {
            createUser(name, email)
                .then(result => res.send(result))
                .catch((error) => res.status(404).send({ "error": error.message }))
        } catch (error) {
            res.status(400).send({ "error": error.message })
        }
    },
    updateUser: (req, res) => {
        const { id } = req.params
        const { name, email } = req.body
        try {
            updateUser(id, name, email)
                .then(result => res.send(result))
                .catch((error) => res.status(404).send({ "error": error.message }))
        } catch (error) {
            res.status(400).send({ "error": error.message })
        }
    },
    deleteUser: (req, res) => {
        const { id } = req.params
        try {
            deleteUser(id)
                .then(result => res.send(result))
                .catch((error) => res.status(404).send({ "error": error.message }))
        } catch (error) {
            res.status(400).send({ "error": error.message })
        }
    },
    deleteAllUsers: (req, res) => {
        try {
            deleteAll()
                .then(result => res.send(result))
                .catch((error) => res.status(404).send({ "error": error.message }))
        } catch (error) {
            res.status(400).send({ "error": error.message })
        }
    }

}