const { Router } = require('express');
const {getPokemons} = require('../handlers/getPokemons')
const {getPokemonID} = require('../handlers/getPokemonID')
const {postPokemon} = require('../handlers/postPokemons')
const {getTypes} = require('../handlers/getTypes')



const router = Router();
 
router.use("/pokemons/create", postPokemon); 
router.use("/pokemons/:id", getPokemonID); 
router.use("/pokemons", getPokemons); 
router.use("/types", getTypes) 
 

module.exports = router;
