const express = require('express');
const router = express.Router()
const { getById, getAll, createUser, updateUser, deleteUser, deleteAll } = require('../logic/user')




router.get("/getById/:id?", (req, res) => {
    const { id } = req.params
    try {
        getById(id)
            .then(result => res.send(result))
            .catch((error) => res.status(404).send({ "error": error.message }))
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
}
)


router.get("/all", (req, res) => {
    try {
        getAll()
            .then(result => res.send(result))
            .catch((error) => res.status(404).send({ "error": error.message }))
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
}
)
router.post("/create", (req, res) => {
    const { name, email } = req.body
    try {
        createUser(name, email)
            .then(result => res.send(result))
            .catch((error) => res.status(404).send({ "error": error.message }))
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
}
)


router.put("/update/:id?", (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    try {
        updateUser(id, name, email)
            .then(result => res.send(result))
            .catch((error) => res.status(404).send({ "error": error.message }))
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
}
)


router.delete("/delete/:id?", (req, res) => {
    const { id } = req.params
    try {
        deleteUser(id)
            .then(result => res.send(result))
            .catch((error) => res.status(404).send({ "error": error.message }))
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
}
)


router.delete("/deleteAll", (req, res) => {
    try {
        deleteAll()
            .then(result => res.send(result))
            .catch((error) => res.status(404).send({ "error": error.message }))
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
}
)

module.exports = router