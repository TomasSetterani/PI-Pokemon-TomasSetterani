const { Router } = require('express');
const {getPokemons} = require('../handlers/getPokemons')
const {getPokemonID} = require('../handlers/getPokemonID')
const {getPokemonName} = require('../handlers/getPokemonName')
const {postPokemon} = require('../handlers/postPokemons')



const router = Router();

router.use("/pokemons/create", postPokemon);
/* router.use("/pokemons/:name", getPokemonName);  */
router.use("/pokemons/:id", getPokemonID);
router.use("/pokemons", getPokemons); 

/* router.use("/types", getTypes)  */ 
 

module.exports = router;
