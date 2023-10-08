const {getTypesController} = require('../controllers/getTypesController')


const getTypes = async (req, res) => {
      try {
        const response = await getTypesController()
        res.status(200).send(response)
      } catch (error) {
        res.status(400).send({error: error.message})
      }
};


module.exports = {
    getTypes
}