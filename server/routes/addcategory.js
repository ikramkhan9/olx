const express = require('express');
const router = express.Router();

// IMPORT CATEGORY MODELS
const Category = require('../models/category.model');
router.get('/', (req, res) => {
    res.send('add category page');
});

router.post('/', (req, res) => {
    console.log('category route');

    const categorydata = new Category({
        catname: req.body.txtcategory,
        icon: req.body.txticon,
        ispresent: req.body.txtpresent,
    });

    categorydata.save(function(err, category){
        if(err){
            return err;
        }
        console.log(category);
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