// to connect database to server

const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "ranu8242",
    host : "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;