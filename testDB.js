// import { pool as db } from './db.js'

const { DatabaseController } = require('./controllers/DatabaseController')
const db = require('./db')

const Dbc = new DatabaseController(db)

// console.log(Dbc.getPropertyBySteelName(`10`))

const steels = Dbc.Tables.Steels

// console.log(Dbc.getTableColumns(Dbc.Tables.Steel_elasticity_module))
// console.log(Dbc.getTableColumns(Dbc.Tables.Steel_shear_module))
// console.log(Dbc.getTableColumns(Dbc.Tables.Steel_thermal_exp))
// console.log(Dbc.getTableColumns(Dbc.Tables.Steel_types))
// console.log(Dbc.getTableColumns(steels))

console.log(Dbc.getAllSteels())












// let elQuery = `select value20 from steels
// JOIN steel_elasticity_module ON steels.steel_elasticity_module_id = steel_elasticity_module.steel_elasticity_module_id
// WHERE steel_name = '10'`

// let req = '10'
// let req2 = {'10': '200'}
 
// async function getSteelById(req)
// {
//     await db.connect()
//     res = await db.query(`SELECT steel_name FROM steels WHERE steel_id=${req};`)
//     let [ value ] = res.rows
//     console.log(value.steel_name) 
    
// }

// async function getValue(prop,temp)
// {
//     await db.connect()
//     res = await db.query(`select * from steels 
//     JOIN steel_elasticity_module ON steels.steel_elasticity_module_id = steel_elasticity_module.steel_elasticity_module_id
//     WHERE steel_name = '${req}'`)
//     // let [ value ] = res.rows
//     // console.log(res.fields) 
//     console.log(res.rows) 
// }

// getSteelById(req);
// getElasticityValue(req)

