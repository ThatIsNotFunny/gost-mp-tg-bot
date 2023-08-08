const Pool = require('pg').Pool

const pool = new Pool( {
    user: 'postgres',
    password: 'my2pg2pass4',
    host: "localhost",
    port: "5432",
    database: "MechProps",
})

module.exports = pool