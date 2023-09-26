const { Router } = require('express');
const {getPokemons} = require('../handlers/getPokemons')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getPokemons);

/* router.use("/pokemons/:id", getPokemonID);

router.use("/pokemons/name", getPokemonName);

router.use("/pokemons/create", createPokemon);

router.use("/types", getTypes) */


module.exports = router;
