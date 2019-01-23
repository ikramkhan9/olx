const express = require('express');
const router = express.Router();

//const session = require('express-session');

// IMPORT CATEGORY MODELS
const Olxuser = require('../models/olxuser.model');
router.get('/', (req, res) => {
    res.send('olx user route');
});

router.post('/', (req, res) => {    
    
    let email = req.body.txtemail;
    let pwd = req.body.txtpwd;

    console.log('email:', email);
    console.log('pwd:', pwd);    
    
    Olxuser.findOne({$and: [{"useremail" : email}, {"password" : pwd}]}, (err, data) => {
        if(err){
            console.log('err', err);
            res.send(err);
        }
        else{
            if(data == null || data.length <= 0) {
                console.log('no user found');
                res.send({status:false, message:'no user found'});
            } else {
                req.session.email = email;
                console.log('--- session login:', req.session.email);
                
                //console.log('data:', data);
                res.send({status:true, data});
            }            
        }
    });
});

module.exports = router;