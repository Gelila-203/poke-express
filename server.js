const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//wellcome page
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})


// app.get('/pokemon', (req, res) => {
//     res.send(pokemon);
// });

app.get('/pokemon/', (req, res) => {
    res.render('Index', { pokemon : pokemon});
  });
  

// app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    // res.send(pokemon[req.params['indexOfPokemonArray']]);
// });  

// app.get('/pokemon/:indexOfPokemonArray', function(req, res){
//     res.render(pokemon[req.params['indexOfPokemonArray']])

// });

app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    res.render('Show' , {
        pokey: pokemon[req.params.indexOfPokemonArray]
        });
    });  




app.listen(3000, () => {
    console.log('listening on port 3000');
   
});