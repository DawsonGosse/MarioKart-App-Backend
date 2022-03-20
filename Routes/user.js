const express = require('express')
const {append} = require('express/lib/response')
const router = express.Router()
const { signup, login} = require('../Controller/user')


router.post('/signup', signup)

router.post('/login', login)

module.exports = router