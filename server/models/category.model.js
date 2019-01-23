const mongoose = require('mongoose');

let Schema = mongoose.Schema;
/*
let subItemSchema = mongoose.Schema({
    item_name: String,
    location: String,
    price: Number,
    item_image: String,
    ispresent: Boolean,
    createdAt: { type: Date, default: Date.now }
});
*/
let subCategorySchma = mongoose.Schema({    
    sub_name: String,
    image: String,
    description: String,
    price: Number,
    ispresent: Boolean,    
    createdAt: { type: Date, default: Date.now }
    //subItem: [subItemSchema],
});

let categorySchema = new Schema({
    catname : String,
    icon : String,
    ispresent: Boolean,
    subCategory: [subCategorySchma],
});

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;