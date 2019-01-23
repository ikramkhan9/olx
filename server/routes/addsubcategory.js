const express = require('express');
const router = express.Router();

const path = require('path');

// IMPORT CATEGORY MODELS
const Category = require('../models/category.model');

router.get('/', (req, res) => {
    res.send('add sub category route');
});

router.post('/:catid/:catname', (req, res) => {    
    
    let filepath = path.join(__dirname, '..', 'upload_image');    

    if (!req.files)
        return res.send('No file were uploaded.');
    
    if(req.files){
        let file = req.files.filename;
        let file_name = file.name;

        console.log('cat name:', req.body.txt_subcategory);
        console.log('present:', req.body.txt_present);
        console.log('file name: ', file_name);

        file.mv("./upload_image/" + file_name, function(err) {
            if(err) {
                console.log(err);
                res.send(err);
            } else {
                
                Category.findByIdAndUpdate(
                    {_id: req.params.catid},
                    {$push: {"subCategory": { sub_name: req.body.txt_subcategory, image: file_name, description: req.body.txt_description, price: req.body.txt_price, ispresent: req.body.txt_present }}},        
                    function(err, model) {
                        if(err){
                            console.log('Error from update: ', err);
                        } else {
                            console.log(model);
                            res.send('File uploaded and save data successfully');
                        }
                    }
                ); 
                
                
            }
        })       
    }
    

    /*
    Category.findByIdAndUpdate(
        {_id: req.params.catid},
        {$push: {"subCategory": { icon: req.body.txtcategory, sub_name: req.body.txticon}}},        
        function(err, model) {
            console.log(err);
            //console.log(model);            
        }
    ); 
    */
    
});

module.exports = router;