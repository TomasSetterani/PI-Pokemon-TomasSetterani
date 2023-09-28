const {getPokemonsNameController} = require('../controllers/getPokemonsNameController');


const getPokemonName = async (req, res) => {
    const {name} = req.params
     try {
        const response = await getPokemonsNameController(name)
        res.status(200).send(response)
     } catch (error) {
        res.status(400).send({error:error.message})
     }
};


module.exports ={
    getPokemonName
}