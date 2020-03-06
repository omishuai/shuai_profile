
const dotenv = require('dotenv');
dotenv.config();

const{
DB_USER: user,
DB_HOST: host,
DB_PORT: port,
DB_DATABASE: database,
DB_PASSWORD: password,
} = process.env

const {Pool,Client} = require('pg')
const config = {
      user,
      host,
      database,
      password,
      port,
      ssl: true
}

const pool = new Pool(config);

module.exports = pool;