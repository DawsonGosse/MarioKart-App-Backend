const express = require('express')
const mongoose =  require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {type:String, unique:true},
    password: String,
    username: {type: String, unique:true, maxLength: 20},
})

UserSchema.pre('save', function (next){

    const user = this

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash
            next()
        });
    });

})

UserSchema.methods.comparePassword = function(password){
   return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User