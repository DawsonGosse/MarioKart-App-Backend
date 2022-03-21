const express = require('express')

const router = express.Router()
const authoriseUser = require("../Auth/index")

const {getLoadout, createLoadout, deleteLoadout, updateLoadout} = require('../Controller/loadout')

router.get('/', authoriseUser, getLoadout)

router.post('/new', createLoadout)

router.delete('/delete', deleteLoadout)

router.patch('/update', updateLoadout)

module.exports = router