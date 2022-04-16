const router = require('express').Router();
const { request } = require('express');
const signUpSchema = require('../models/sign-up');

router.post('/signup', (req, res)=>{
    const newUser = signUpSchema({
        full_name: req.body.full_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

module.exports = router;