const db = require('./db')
 
async function connect()
{
    await db.connect()
    let x = await db.query('SELECT * FROM steels;')
    console.log(x.rows) 
    await db.end()
}

connect();
