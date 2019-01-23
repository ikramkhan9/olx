const express = require('express')
const app = express();

const cors = require('cors');
const path = require('path');

const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const session = require('express-session');

// DATABASE CONNECTION
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/olx', { useNewUrlParser: true });

// FOR CORS ORIGIN RESOURCES SHARING
app.use(cors());
app.use(fileupload());
app.use(session({secret: 'fspopvdpmvdkdpfkvpkdpvpdvkp', resave: true, saveUninitialized: true}))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/upload_image',express.static(path.resolve(__dirname, 'upload_image')));

// IMPORT ALL ROUTES
const categoryRouter = require('./routes/category');
const addCategory = require('./routes/addcategory');
const editCategory = require('./routes/editcategory');

const subCategory = require('./routes/subcategory');
const addSubCategory = require('./routes/addsubcategory');
const userLogin = require('./routes/userlogin');
const signup = require('./routes/signup');
const favoritItem = require('./routes/favoriteItem');

// IMPORT ALL SCHEMA MODELS

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/category', categoryRouter);
app.use('/addcategory', addCategory);
app.use('/editcategory', editCategory);

app.use('/subcategory', subCategory);
app.use('/addsubcategory', addSubCategory);
app.use('/login', userLogin);
app.use('/signup', signup);
app.use('/favoriteitem', favoritItem);

app.listen(5000, () => console.log('Example app listening on port 5000.'))


