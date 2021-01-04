const express = require('express')
const router = express.Router()
const Alien = require('../models/blog')
const User = require('../models/user')


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
        const alien = await Alien.findById(req.params.id).populate('blog_type').populate('created_by');
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    console.log(req.body.blog_type)
    const alien = new Alien({
        title: req.body.title,
        description: req.body.description,
        created_by: req.body.created_by,
        blog_type: req.body.blog_type
    })

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
        alien.firstname = req.body.firstname
        alien.email = req.body.email
        alien.dob = req.body.dob
        alien.blog_type = req.body.blog_type

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
