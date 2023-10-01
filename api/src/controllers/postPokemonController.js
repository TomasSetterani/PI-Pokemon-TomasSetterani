 const {Pokemons} = require('../db')


const postPokemonController = async (name, image, HP, attack, defence, speed, height, weight) => {
    return await Pokemons.create({name, image, HP, attack, defence, speed, height, weight})
    };



module.exports ={
    postPokemonController
}