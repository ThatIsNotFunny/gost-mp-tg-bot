const db = require('../db')

class ElastisityController {
    async getElasticity(req,res) {
        const elastisity = await db.query('SELECT * FROM steels')
        console.log(elastisity)
    }
}

module.exports = ElastisityController