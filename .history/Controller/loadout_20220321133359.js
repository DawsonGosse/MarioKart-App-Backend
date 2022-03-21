const Loadout = require('../models/loadout')

const getLoadout = (req, res) => {
    Loadout.find({}, (err, data) => {
        if(err) return res.status(500).send("Something went wrong in the database")
        res.json(data)
    })
}

module.exports = {
    getLoadout,
    createLoadout,
    updateLoadout,
    deleteLoadout,
}