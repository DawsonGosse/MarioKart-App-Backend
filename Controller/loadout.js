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

const updateLoadout = (req, res) => {
    // res.body.id is the user generated id and the req.body.update can be used to patch certain data and change it
    Loadout.findByIdAndUpdate(req.body.id,req.body.update,(err, loadout)=>{
        // error if it doesnt exist
        if(err) return res.status(404).send('not found')
        // Otherwise show the loadout
        res.json(loadout)

})
}

const deleteLoadout = (req, res) => {
    //takes the loadout id from the body and deletes it
    Loadout.findByIdAndDelete(req.body.id, function (err) {
      if(err)  return res.status(500).send("something went wrong")
      res.send("Successful deletion")
    })
}

module.exports = {
    getLoadout,
    createLoadout,
    updateLoadout,
    deleteLoadout,
}