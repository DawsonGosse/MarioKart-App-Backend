const express = require('express')
const app = express()
const mongoose = require("mongoose")
const config = require('./config')
const LoadoutRouter = require('./Routes/loadout')
const UserRouter = require('./Routes/user')
app.use(express.json())


mongoose.connect('mongodb+srv://KellyMenzul:M1ckeyd0g@cluster0.1tsth.mongodb.net/MarioCartDB?retryWrites=true&w=majority', (err) => {
    if(err) return console.log(err)
    console.log('connected to db sucessfully')
})

app.use(UserRouter)
app.use(LoadoutRouter)


app.listen(3000, () => {
    console.log("server listening on 3000")
})