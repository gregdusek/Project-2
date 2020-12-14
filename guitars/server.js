// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const MONGO_STRING = process.env.MONGO_STRING;
const methodOverride = require('method-override');
const db = mongoose.connection;

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI , { useUnifiedTopology: true }, { useNewUrlParser: true});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open' , ()=>{});

// =======================================
//                DATABASE
// =======================================
const Guitars = require('./models/guitars.js');


// =======================================
//               MIDDLEWARE 
// =======================================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//SETUP VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(MONGO_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// =======================================
//                 ROUTES 
// =======================================
app.get('/' , (req, res) => {
    res.send('Hello World!');
  });



  app.get('/guitars', (req, res) => {
    Guitars.find({}, (err, allGuitars) => {
        if(!err) {
            res.render('Home', {
                Guitars: allGuitars,
            });
        } else {
            res.send(err)
        };
    });
});

app.delete('/guitars/:id', (req, res) => {
    Guitars.findByIdAndDelete(req.params.id, (err, foundGuitar) => {
        if(!err){
            res.redirect('/guitars')
        } else {
            res.send(err);
        }
    })
})

app.get('/guitars/about', (req, res) => {
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

app.get('/guitars/contact', (req, res) => {
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
app.get('/guitars/inventory', (req, res) => {
    Guitars.find({}, (err, allGuitars) => {
        if(!err) {
            res.render('Inventory', {
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
app.get('/guitars/new', (req, res) => {
    res.render('New');
});


// =======================================
//                  DELETE 
// =======================================
app.delete('/guitars/:id', (req, res) => {
    Guitar.findByIdAndDelete(req.params.id, (err, foundGuitar) => {
        if(!err){
            res.redirect('/guitars/home')
        } else {
            res.send(err);
        }
    })
})


// =======================================
//                 UPDATE
// =======================================
app.put('/guitars/:id', (req, res) => {
    Guitar.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGuitar) => {
        if(!err){
            res.redirect('/guitars');
        } else {
            res.send(err);
        }
    })
})

// =======================================
//                 CREATE 
// =======================================
app.post('/guitars/', (req, res) => {
    if(req.body.price < 0) {
        req.body.price = 'err'
    }
    if (req.body.qty < 0) {
        req.body.qty = 'err'
    }
    Guitars.create(req.body, (err, createdGuitar) => {
        if(!err) {
            res.redirect('/guitars')
        } else {
            res.send(err);
        }
    });
});

// =======================================
//                  EDIT
// =======================================
app.get('/guitars/:id/edit', (req, res) => {
    Guitars.findById(req.params.id, (err, foundGuitar) => {
        if(!err){
            res.render('Edit', {
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
app.get('/guitars/:id', (req, res)=>{
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