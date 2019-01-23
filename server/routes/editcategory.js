const express = require('express');
const router = express.Router();

// IMPORT CATEGORY MODELS
const Category = require('../models/category.model');

router.get('/:categoryid', (req, res) => {
    console.log('edit category route');
    console.log('category id: ', req.params.categoryid);
    
    Category.findById({"_id": req.params.categoryid}, function(err, subcategory){
        if(err){
            return err;
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

/*
router.put('/:categoryid', (req, res) => {

});
*/

module.exports = router;