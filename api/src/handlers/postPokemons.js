const {postPokemonController} = require('../controllers/postPokemonController')

const postPokemon = async (req, res) => {
   const {name, image, HP, attack, defence, speed, height, weight} = req.body;
     try {
        const response = await postPokemonController(name, image, HP, attack, defence, speed, height, weight)
        res.status(200).json(response);
     } catch (error) {
        res.status(400).json({error:error.message});
     }
};



module.exports ={
    postPokemon
}