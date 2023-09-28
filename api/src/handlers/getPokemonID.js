const {getPokemonIDController} = require('../controllers/getPokemonIDController')


const getPokemonID = async (req, res) => {
   try {
    const {id} = req.params;
    const response = await getPokemonIDController(id);
    res.status(200).json(response)
   } catch (error) {
    res.status(400).json({error : error.message})
   }
};


module.exports = {
    getPokemonID
};