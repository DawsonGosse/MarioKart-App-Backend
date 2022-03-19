const express = require('express')
const app = express()
const mongoose = require("mongoose")
const config = require('./config')
app.use(express.json())


mongoose.connect(config.MODULE_URL, (err) => {
    if(err) return console.log(err)
    console.log('connected to db sucessfully')
})

app.use(ROUTER_HERE)

app.listen(3000, () => {
    console.log("server listening on 3000")
})