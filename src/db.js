const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'musubi88',
    host: 'localhost',
    port: 5432,
    database: 'restaurant'
})

module.exports = pool 