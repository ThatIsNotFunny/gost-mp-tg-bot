const db = require('../db')
 

class Controller {
    async getSteelById(req,res) {
        await db.connect()
        const elastisity = await db.query(`SELECT steel_name FROM steels WHERE steel_id=${req};`)
        let [ value ] = elastisity.rows
        console.log(value.steel_name) 
        return value.steel_name
    }
}


// class ElastisityController {
//     async getElasticity(req,res) {
//         await db.connect()
//         const elastisity = await db.query('SELECT * FROM steels;')
//         console.log(elastisity.rows) 
//         await db.end()
//         return elastisity.rows
//     }
// }

module.exports = Controller