const express = require('express');
const router = express.Router();
const Alien = require('../models/user');
const bcrypt = require('bcryptjs');
const  {registerValidation} = require('../validations/user_validation')

const  verify = require('../permission/isAuthendicate')


// const {registerValidation} = require('../validations/user_validation')

router.get('/',verify, async(req,res) => {
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
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);



    const salt = await bcrypt.genSaltSync(10);
    console.log(salt)
    const hashPass = await bcrypt.hashSync(req.body.password, '$2a$10$AsEX8KLfnFY8VmQseRVvDO')
    // res.json({"message": hashPass})

    const alien = new Alien({
        firstname: req.body.firstname,
        email: req.body.email,
        dob: req.body.dob,
        password: hashPass
    });


    try{
        const a1 =  await alien.save()
        res.json(a1)
    }catch(err){
        res.status(400).send('Error' + err)
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
