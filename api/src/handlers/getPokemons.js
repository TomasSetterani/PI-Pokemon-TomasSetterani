const  {getPokemonsController} = require('../controllers/getPokemonsController')


const getPokemons = async (req, res) => {
       try {
        const response = await getPokemonsController();
        res.status(200).send(response)
       } catch (error) {
        res.status(400).send({ error: error.message})
       }
};


module.exports = {
    getPokemons
}