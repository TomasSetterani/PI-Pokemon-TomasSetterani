const axios = require('axios')
const {Types} = require('../db')

const getTypesController = async () => {
    try {
        let types = await Types.findAll({ attributes: ["id", "name"] });
        if (!types.length) {
          const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
          types = getTypes.data.results;
          for (const type of types) {
            const url = await axios.get(type.url);
            delete type.url;
            type.id = url.data.id;
    
          }
          await Types.bulkCreate(types);
        }
        return types;
      } catch (error) {
        return { error: error.message };
      }
    };



module.exports = {
    getTypesController
}