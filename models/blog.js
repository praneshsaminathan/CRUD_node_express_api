const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    blog_type : {
        type: mongoose.Schema.Types.ObjectId, ref: 'BlogType'
    }

})

module.exports = mongoose.model('Blog',blogSchema)

