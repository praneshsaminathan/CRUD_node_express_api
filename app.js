const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/nodecrud';
const dotenv = require("dotenv");

dotenv.config()

const app = express()
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const blogRouter = require('./routes/blog')
const blogtypeRouter = require('./routes/blogtype')


app.use('', authRouter)
app.use('/users',userRouter)
app.use('/blogs',blogRouter)
app.use('/blogtypes',blogtypeRouter)


app.listen(9000, () => {
    console.log('Server started')
})
