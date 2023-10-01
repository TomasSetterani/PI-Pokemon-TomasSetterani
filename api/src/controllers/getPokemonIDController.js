const axios = require('axios');
const API = 'https://pokeapi.co/api/v2/pokemon';
const {Pokemons} = require('../db')


const getPokemonIDController = async (id, source) => {

    const pokemonData = source === 'api' ? (await axios.get(`${API}/${id}`)).data : await Pokemons.findByPk(id);

if(source === 'api') { 
       const pokemonesAPI = {
           id,
           name: pokemonData.name,
           image: pokemonData.sprites.front_default,
           HP: pokemonData.stats[0].base_stat,
           attack: pokemonData.stats[1].base_stat,
           defence: pokemonData.stats[2].base_stat, 
           speed: pokemonData.stats[5].base_stat,
           weight: pokemonData.weight,
           height: pokemonData.height,
       }; 
        return pokemonesAPI
    } else { 
        const pokemonesBD = {
            id: pokemonData.ID,
            name: pokemonData.name,
            image: pokemonData.image,
            HP: pokemonData.HP,
            attack: pokemonData.attack,
            defence: pokemonData.defence,
            speed: pokemonData.speed,
            height: pokemonData.height,
            weight: pokemonData.weight
                
        }
        return pokemonesBD
    }
           
} 




module.exports = {
    getPokemonIDController
}