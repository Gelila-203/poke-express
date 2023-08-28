require('dotenv').config();
const express = require('express');
const app = express();
const pokemon= require('./models/pokemon');
const mongoose  = require('mongoose');
const Pokemons = require('./models/Pokemons');

app.use(express.urlencoded({extended: true}));

app.set('view engine' , 'jsx' );
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    UseUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.get('/' ,(req, res) => {
    res.send("Welcome Page");
})

//Index
// app.get('/pokemon' ,(req, res) => {
//     res.send(pokemon);
// })
app.get('/pokemon', (req, res) => {
    Pokemons.find({}).then((allPokemons) => {
        res.render('Index' , {pokey: allPokemons});

    })
    
});

//New
app.get('pokemon/new', (req, res)=>{
    res.render('New')
})

// create

app.post('/pokemon', (req, res) =>{
   
    Pokemons.create(req.body)
    .then((createdPokemon) => {
      res.redirect('/pokemon')
    })
    .catch(error => {
      console.error(error)
    });
    
})

/// Show
app.get('/pokemon/:id' , (req,res) => {
    //res.send(pokemon[req.params.index]);
    Pokemons.findOne({_id: req.params.id}).then((foundPokemon) =>{
       // res.send(foundVegetable)
       res.render('Show' , {
        pokey: foundPokemon
       })
    }).catch(error =>{
        console.error(error)
    })
})


//Port Listining 
app.listen(3000, () => {
    console.log("Listening on port 3000");
})