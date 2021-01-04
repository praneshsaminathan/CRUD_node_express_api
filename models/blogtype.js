const mongoose = require('mongoose')

const blogtypeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('BlogType',blogtypeSchema)

