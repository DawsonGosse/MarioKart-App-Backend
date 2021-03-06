const User = require('../models/user')
const jwt = require('jsonwebtoken');


const signup = (req,res)=>{
    const user = new User()

    user.email = req.body.email
    user.password = req.body.password
    user.username = req.body.username
    user.save((err, done)=>{
        if(err) return res.status(500).send("Signup Failed")
        res.status(201).send("Signup Successful")
    })
}

const login = (req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err || !user ) return res.status(404).send("User Not Found")

        if(user.comparePassword(req.body.password)){

            const token = jwt.sign({id:user._id}, 'thisismysecret');
            res.send(`Hello! ${user.username}, ${token}`)
        }else{
            res.send("Could not login")
        }
        
    })
}


module.exports = {
    signup,
    login
}