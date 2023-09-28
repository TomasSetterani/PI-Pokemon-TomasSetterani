const { Router } = require('express');
const {getPokemons} = require('../handlers/getPokemons')
const {getPokemonID} = require('../handlers/getPokemonID')
const {getPokemonName} = require('../handlers/getPokemonName')



const router = Router();

router.use("/pokemons/:name", getPokemonName); 


router.use("/pokemons", getPokemons); 

router.use("/pokemons/:id", getPokemonID); 



/* router.use("/pokemons/create", createPokemon);

router.use("/types", getTypes)   */
 

module.exports = router;
