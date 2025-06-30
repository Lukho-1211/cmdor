const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide your name']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Please provide password'],
        minlength: 8,
        select: false
    },
})


const User = mongoose.model('User', userSchema);
module.exports = User;