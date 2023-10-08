const axios = require('axios');
const API = 'https://pokeapi.co/api/v2/pokemon';
const {Pokemons} = require('../db')


const getPokemonsNameController = async (name) =>{
    try {
        
        const minName = name.toLowerCase()
        
            const dataBase = await Pokemons.findOne({ where: { name: minName } });
            if (dataBase){
                return dataBase
            } else {
                const {data} = await axios.get(`${API}/${minName}`)
                const apiData = {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat, 
                    speed: data.stats[5].base_stat,
                    weight: data.weight,
                    height: data.height
                 };
                
                 return apiData
    
        }
    } catch (error) {
       

    // Devolver un mensaje personalizado en caso de error
    return { error: `No se encontró un pokemon con el nombre: ${name}`}
    }

}






module.exports = {
    getPokemonsNameController
}