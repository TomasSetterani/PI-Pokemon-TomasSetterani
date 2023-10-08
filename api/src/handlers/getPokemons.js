const  {getAllPokemonsInfo} = require('../controllers/getPokemonsController')
const {getPokemonsNameController} = require('../controllers/getPokemonsNameController')


const getPokemons = async (req, res) => {
    const {name} = req.query
    try { 
        if(name){
            const responseByName = await getPokemonsNameController(name)
            res.status(200).send(responseByName)
        } else {
            const responseAll = await getAllPokemonsInfo();
            res.status(200).send(responseAll)
        };
    } catch (error) {
        res.status(400).json({ error: error.message})
        }
    };



module.exports = {
    getPokemons
}