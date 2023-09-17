const Pool = require('pg').Pool

// import { pg } from 'pg'

const pool = new Pool( {
    user: 'postgres',
    password: 'my2pg2pass4',
    host: "localhost",
    port: "5433",
    database: "MechProps",
})

// export { pool }

module.exports = pool