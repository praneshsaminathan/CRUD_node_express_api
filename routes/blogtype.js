const express = require('express')
const router = express.Router()
const Alien = require('../models/blogtype')


router.get('/', async(req,res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id).populate('blog_type')
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    console.log(req.body.blog_type)
    const alien = new Alien({
        name: req.body.name,
    })
    // const user = await User.findById('5ff2bccfd05a9c0a2f1fcf40')
    // alien.created_by = user

    try{
        const a1 =  await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.name = req.body.name


        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id)
        if(alien) {
            const a1 = await alien.delete()
            res.json(a1)
        }
        else{
            res.json('ok')
        }

    }catch(err){
        res.send('Error' + err)
    }

})

module.exports = router
