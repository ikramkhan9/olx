const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let favouritSchema = mongoose.Schema({    
    itemid: String,
    itemname: String,
    image: String,
    price: Number,
    createdAt: { type: Date, default: Date.now }    
});

let categorySchema = new Schema({
    useremail: String,
    password: String,    
    favouritItems: [favouritSchema],
});

let Olxuser = mongoose.model('Olxuser', categorySchema);

module.exports = Olxuser;