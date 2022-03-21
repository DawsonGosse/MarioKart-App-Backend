const Loadout = require('../models/loadout')

const getLoadout = (req, res) => {
    Loadout.find({}, (err, data) => {
        if(err) return res.status(500).send("Something went wrong in the database")
        res.json(data)
    })
}

// creates loadout

const createLoadout = (req, res) => {
    // copies(clones) loadout schema
    const loadout = new Loadout()

    loadout.character = req.body.character
    loadout.kart = req.body.kart
    loadout.wheels = req.body.wheels
    loadout.glider = req.body.glider
    
    // saves the loudout
    loadout.save((err, data) => {
        if(err) return res.status(500).send("something went wrong")
        res.status(201).json(data)
    })
    res.status(201).send('Loadout Created')
}

module.exports = {
    getLoadout,
    createLoadout,
    updateLoadout,
    deleteLoadout,
}