const express = require('express');
const router = express.Router();

// IMPORT CATEGORY MODELS
const Category = require('../models/category.model');

router.get('/:categoryid', (req, res) => {
    console.log('category id: ', req.params.categoryid);
    //res.send(req.params.categoryid);

    
    Category.findById({"_id": req.params.categoryid}, (err, subcategory) => {
        if(err){
            console.log('Error from get category:', err);
            res.send(err);
            //return err;
        }
        console.log(subcategory);
        res.json(subcategory);
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