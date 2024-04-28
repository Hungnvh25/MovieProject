const path = require('path')

const express = require('express')

const adminUser = require('../controllers/user')
const adminActor = require('../controllers/actor')

const router = express.Router()

// User
router.get('/users', adminUser.getListUser)
router.post('/user/create', adminUser.createUser)
router.get('/user/update/:id', adminUser.updateUser)
router.get('/user/read/:id', adminUser.readUser)
router.get('/user/delete/:id', adminUser.deleteUser)





module.exports = router;

