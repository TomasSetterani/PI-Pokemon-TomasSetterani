 const {Pokemons} = require('../db')


const postPokemonController = async (name, image, hp, attack, defense, speed, weight,height) => {
    return await Pokemons.create({name, image, hp, attack, defense, speed, weight, height})
    };



module.exports ={
    postPokemonController
}