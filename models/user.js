const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: false,
        default: Date
    }

})

module.exports = mongoose.model('User',userSchema)
