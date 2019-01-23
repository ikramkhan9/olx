const express = require('express');
const router = express.Router();

const session = require('express-session');

// IMPORT CATEGORY MODELS
const Olxuser = require('../models/olxuser.model');
router.get('/', (req, res) => {

    if(req.session.email == null || req.session.email == undefined){
        console.log('Please login before');
        res.send('Please login before')
    }else{
        console.log('You are logged in:', req.session.email);
        res.send('You are logged in');
    }
});

router.post('/', (req, res) => {
    console.log('item id:', req.body.itemid);
    console.log('item name:', req.body.item_name);
    console.log('item price:', req.body.item_price);
    if(!req.session.email){
        console.log('no session. please login');
        res.send('no any session');
    }
    else{
        console.log('session: ', req.session.email);

        Olxuser.findByIdAndUpdate(
            {_id: '5b8e87099264e817ec6d92a5'},
            {$push: {"favouritItems": { itemid: req.body.itemid, itemname: req.body.item_name, price: req.body.item_price }}},        
            function(err, model) {
                if(err){
                    console.log('Error from update: ', err);
                } else {
                    console.log(model);
                    res.send('Item has been favorited successfully');
                }
            }
        );
    }

    

    //res.send(req.body.txtemail + ' ' + req.body.txtpwd);

    // req.session.email = '';

    // const userdata = new Olxuser({
    //     useremail: req.body.txtemail,
    //     password: req.body.txtpwd,
    // });

    // userdata.save((err, olxuser) => {
    //     if(err){
    //         console.log('Error occured from insert user', err);
    //         res.send(err);
    //     }
    //     console.log(olxuser);
    //     res.json(olxuser);
    //     //res.redirect('/');
    // });

    
});

module.exports = router;