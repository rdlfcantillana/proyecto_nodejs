const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'tulli1467',
    host: 'localhost',
    port: 5432,
    database: 'restaurantebackup'
});

module.exports = pool 