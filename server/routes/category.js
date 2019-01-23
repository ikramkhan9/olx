const express = require('express');
const router = express.Router();

// IMPORT CATEGORY MODELS
const Category = require('../models/category.model');

router.get('/', (req, res) => {
    console.log('category route');

    Category.find({}, function(err, category){
        if(err){
            consolo.log('Error from category route:', err);
            res.send(err);
        }
        //console.log(category);
        res.json(category);
    });

    /*
    let data = {
        catname: 'Fashion and Beauty',
        ispresent: true,
    }
    Category.create(data, function(err, category){
        if(err){
            console.log(err);
            return err;
        }
        console.log(category);
        res.send(category);
    });
    */

    
    
    
});

module.exports = router;