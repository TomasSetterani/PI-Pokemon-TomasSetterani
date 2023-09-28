const axios = require('axios');
const API = 'https://pokeapi.co/api/v2/pokemon';
const {Pokemons} = require('../models/PokemonModel')

const getPokemonsNameController = async (name) =>{
   const {data} = await axios.get(`${API}/${name}`)
   const pokemonData = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    HP: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defence: data.stats[2].base_stat, 
    speed: data.stats[5].base_stat,
    weight: data.weight,
    height: data.height,
};
return pokemonData;
};



module.exports = {
    getPokemonsNameController
}