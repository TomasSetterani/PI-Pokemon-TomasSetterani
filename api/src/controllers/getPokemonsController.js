const axios = require('axios');
const API = 'https://pokeapi.co/api/v2/pokemon';
const {Pokemons} = require('../db')

const getPokemonInfo = async (url) => {
 
  const response = await axios.get(url);
  const data = response.data;

  const pokemonInfo = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    weight: data.weight,
    height: data.height,
  };

  return pokemonInfo;
} 


const getAllPokemonsInfo = async () => {
 
    
    const response = await axios.get(API);
    const { results } = response.data;

    
    const pokemonsAPI = [];

    for (const pokemon of results) {
      const pokemonInfo = await getPokemonInfo(pokemon.url);
      pokemonsAPI.push(pokemonInfo);
    }

    const allPokemons = await Pokemons.findAll();
    const pokemonsBd = allPokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      weight: pokemon.weight,
      height: pokemon.height

}));
   
    return [...pokemonsAPI,...pokemonsBd]
 
};



  let pokemonsAPI = [];

  getAllPokemonsInfo()
    .then((results) => {
      pokemonsAPI = results;
    })
  .catch((error) => {
    console.error('Error general:', error);
  });


 module.exports ={
  getAllPokemonsInfo
 }