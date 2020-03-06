

const {Pool,Client} = require('pg')
const url = 'postgres://nmmuphsgoxjulp:6c7a0193eb85bca5ea08e913d645d6c10b991943e58308b1617666c9e28a7494@ec2-52-23-14-156.compute-1.amazonaws.com:5432/dco2u4di1ebi9b'
const config = {
      user: 'nmmuphsgoxjulp',
      host: 'ec2-52-23-14-156.compute-1.amazonaws.com',
      database: 'dco2u4di1ebi9b',
      password: '6c7a0193eb85bca5ea08e913d645d6c10b991943e58308b1617666c9e28a7494',
      port: 5432,
      ssl: true
}

const pool = new Pool(config);

module.exports = pool;