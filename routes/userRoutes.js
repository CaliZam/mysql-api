const express = require('express');
const router = express.Router()
const userController = require('../controllers/userControllers')

router.get("/getById/:id?", userController.getUser)
router.get("/all", userController.getAllUser)
router.post("/create", userController.createUser)
router.put("/update/:id?", userController.updateUser)
router.delete("/delete/:id?", userController.deleteUser)
router.delete("/deleteAll", userController.deleteAllUsers)


module.exports = router