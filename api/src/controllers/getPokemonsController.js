 const axios = require('axios');
 const API = 'https://pokeapi.co/api/v2/pokemon';

 const getPokemonsController = async () => {
    const response = await axios.get(API);
   const data = response.data;
   return data;
 };



 module.exports ={
    getPokemonsController
 }