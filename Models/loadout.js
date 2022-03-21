const express = require('express')
const mongoose =  require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const LoadoutSchema = new Schema({
    character: {type: String, required: true},
    kart: {type: String, required: true},
    wheels: {type: String, required: true},
    glider: {type: String, required: true},
})


const Loadout = mongoose.model('Loadout', LoadoutSchema)

module.exports = Loadout