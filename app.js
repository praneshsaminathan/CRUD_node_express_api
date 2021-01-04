const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/nodecrud'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/users')
const blogRouter = require('./routes/blog')
const blogtypeRouter = require('./routes/blogtype')


app.use('/users',userRouter)
app.use('/blogs',blogRouter)
app.use('/blogtypes',blogtypeRouter)

app.listen(9000, () => {
    console.log('Server started')
})
