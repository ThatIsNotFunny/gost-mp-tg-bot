const db = require('../db');

class DatabaseController {
    constructor(db) {
        this.db = db;
        this.Tables;
    }

    Tables = Object.freeze({
        Steels: `steels`,
        Steel_types: `steel_types`,
        Steel_thermal_exp: `steel_thermal_exp`,
        Steel_shear_module: `steel_shear_module`,
        Steel_elasticity_module: `steel_elasticity_module`,
    });

    Properties = Object.freeze({
        te: 'te'
    });

    async getTableColumns(name) {
        await this.db.connect();
        let res = await this.db.query(`SELECT * FROM ${name};`);
        let cols = [];
        let counter = 0;
        do {
            cols.push(res.fields[counter].name);
            counter += 1;
        } while (res.fields[counter]);
        console.log(cols);
        
        let Columns = {};
        for (let item of cols) {
            Columns[item] = Symbol(item);
        }
        Columns = Object.freeze(Columns);
        return Columns;
    }

    async getPropertyBySteelName(prop, name) {
        await this.db.connect();
        console.log(this.Tables.Steels.toString());
        let res = await this.db.query(`SELECT ${prop} FROM ${this.Tables.Steels} WHERE steel_id=${name};`);
        let [value] = res.rows;
        db.end(); 
        return this.Tables.Steel_elasticity_module;
    }

    async getAllSteels() {
        await this.db.connect();
        let res = await this.db.query(`SELECT * FROM ${this.Tables.Steels};`);
        
        const steels = []
        
        let counter = 0;
        
        do {
            steels.push(res.rows[counter].steel_name.replace('\n',''));
            console.log(res.rows[counter].steel_name.replace('\n',''))
            counter += 1;
        } while (res.rows[counter]);
        return steels.toString()
    }

    async getSteelsByTypes() {

    }
}
exports.DatabaseController = DatabaseController;
