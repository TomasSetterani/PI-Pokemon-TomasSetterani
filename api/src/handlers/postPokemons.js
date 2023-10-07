const {postPokemonController} = require('../controllers/postPokemonController')

const postPokemon = async (req, res) => {
   const {name, image, hp, attack, defense, speed, weight, height} = req.body;
     try {
        const response = await postPokemonController(name, image, hp, attack, defense, speed, weight, height)
        res.status(200).json(response);
     } catch (error) {
        res.status(400).json({error:error.message});
     }
};



module.exports ={
    postPokemon
}