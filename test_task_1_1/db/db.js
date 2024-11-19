const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER_NAME || "postgres",
  password: process.env.DB_PASSWORD || "root",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  database: 'shopstore',
});

module.exports = pool;