if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
};//<= Heroku

// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const Guitars = require('./models/guitars.js');


// =======================================
//                  PORT
// =======================================
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3001;

// =======================================
//                DATABASE
// =======================================
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI

// Connect to Mongo
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// =======================================
//               MIDDLEWARE 
// =======================================

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project

app.use(methodOverride('_method')); // allow POST, PUT and DELETE from a form

//SETUP VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

// =======================================
//                 ROUTES 
// =======================================
app.get('/', (req, res) => {
    Guitars.find({}, (err, allGuitars) => {
        if(!err) {
            res.render('Home', {
                guitars: allGuitars,
            });
        } else {
            res.send(err)
        };
    });
});

app.get('/about', (req, res) => {
    Guitars.find({}, (err, allGuitars) => {
        if(!err) {
            res.render('About', {
                Guitars: allGuitars,
            });
        } else {
            res.send(err)
        };
    });
});

app.get('/contact', (req, res) => {
    Guitars.find({}, (err, allGuitars) => {
        if(!err) {
            res.render('Contact', {
                Guitars: allGuitars,
            });
        } else {
            res.send(err)
        };
    });
});

// =======================================
//                  INDEX 
// =======================================
app.get('/gregs-guitars/', (req, res) => {
    Guitars.find({}, (err, allGuitars) => {
        if(!err) {
            res.render('Index', {
                guitars: allGuitars,
            });
        } else {
            res.send(err)
        };
    });
});

// =======================================
//                  NEW 
// =======================================
app.get('/gregs-guitars/new', (req, res) => {
    res.render('New');
});


// =======================================
//                  DELETE 
// =======================================
app.delete('/gregs-guitars/:id', (req, res) => {
    Guitars.findByIdAndDelete(req.params.id, function (err, foundGuitar){
        if(!err){
            console.log(err)
        } else {
            res.send("deleted :", docs);
        }
    });
    res.redirect('/gregs-guitars')
})


// =======================================
//                 UPDATE
// =======================================
app.put('/gregs-guitars/:id', (req, res) => {
    Guitars.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGuitar) => {
        if(!err){
            res.redirect('/gregs-guitars/');
        } else {
            res.send(err);
        }
    })
})

// =======================================
//                 CREATE 
// =======================================
app.post('/gregs-guitars/', (req, res) => {
    if(req.body.price < 0) {
        req.body.price = 'err'
    }
    if (req.body.qty < 0) {
        req.body.qty = 'err'
    }
    Guitars.create(req.body, (err, createdGuitar) => {
        if(!err) {
            res.redirect('/greg-guitars')
        } else {
            res.send(err);
        }
    });
});

// =======================================
//                  EDIT
// =======================================
app.get('/gregs-guitars/:id/edit', (req, res) => {
    Guitars.findById(req.params.id, (err, foundGuitar) => {
        if(!err){
            res.render('Edit.jsx', {
                guitar: foundGuitar
            })
        } else {
            res.send(err);
        }
    })
})

// =======================================
//                  SHOW 
// =======================================
app.get('/gregs-guitars/:id', (req, res)=>{
    Guitars.findById(req.params.id, (err, foundGuitar)=>{
        if(!err) {
            res.render('Show', {
                guitar: foundGuitar
            });
        } else {
            res.send(err);
        };
    });
});


app.listen(PORT, () => {
    console.log('im listening...');
});