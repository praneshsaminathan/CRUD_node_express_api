const express = require('express')
const router = express.Router()
const Alien = require('../models/user')


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
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        firstname: req.body.firstname,
        email: req.body.email,
        dob: req.body.dob
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
