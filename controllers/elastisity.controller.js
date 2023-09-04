const db = require('../db')
 

class ElastisityController {
    async getElasticity(req,res) {
        await db.connect()
        const elastisity = await db.query('SELECT * FROM steels;')
        console.log(elastisity.rows) 
        await db.end()
        return elastisity.rows
    }
}

module.exports = ElastisityController