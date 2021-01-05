const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async(req,res) => {
    // const email = req.body.email;
    const password = req.body.password;

    var user = await User.findOne({email: req.body.email});

    if (user) {

    const isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
            res.json({"token": token})
        }
        else {
            res.json({"message": "Wrong Password"})
        }
    }
    else{
        res.json({"Message": "Unknown User"})
    }
})


module.exports = router
