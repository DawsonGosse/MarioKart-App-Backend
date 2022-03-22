const express = require('express')

const router = express.Router()
const authoriseUser = require("../Auth/index")

const {getLoadout, createLoadout, deleteLoadout, updateLoadout} = require('../Controller/loadout')

router.get('/', authoriseUser, getLoadout)

router.post('/new', authoriseUser, createLoadout)

router.delete('/delete', authoriseUser, deleteLoadout)

router.patch('/update', authoriseUser, updateLoadout)

module.exports = router