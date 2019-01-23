const express = require('express');
const router = express.Router();

const session = require('express-session');

// IMPORT CATEGORY MODELS
const Olxuser = require('../models/olxuser.model');
router.get('/', (req, res) => {
    res.send('olx user route');
});

router.post('/', (req, res) => {
    console.log('email:', req.body.txtemail);
    console.log('pwd:', req.body.txtpwd);
    //res.send(req.body.txtemail + ' ' + req.body.txtpwd);

    // req.session.email = '';

    const userdata = new Olxuser({
        useremail: req.body.txtemail,
        password: req.body.txtpwd,
    });

    userdata.save((err, olxuser) => {
        if(err){
            console.log('Error occured from insert user', err);
            res.send(err);
        }
        console.log(olxuser);
        res.json(olxuser);
        //res.redirect('/');
    });

    
});

module.exports = router;