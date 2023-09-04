const db = require('./db')

let req = 5
 
async function getSteelById(req)
{
    await db.connect()
    res = await db.query(`SELECT steel_name FROM steels WHERE steel_id=${req};`)
    let [ value ] = res.rows
    console.log(value.steel_name) 
    await db.end()
}

getSteelById(req);
