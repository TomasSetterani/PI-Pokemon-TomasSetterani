 const axios = require('axios');
 const API = 'https://pokeapi.co/api/v2/pokemon';
 

 const getPokemonsController = async () => {
    const response = await axios.get(API);
    const data = response.data.results.map(data => {
       const pokemon = {
          name: data.name
          


       }
       return pokemon
  })
   return data;
 };



 module.exports ={
    getPokemonsController
 }