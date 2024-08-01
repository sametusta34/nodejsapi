//mysql connection object
import dbconfig from './db.config.mjs';
import mysql from 'mysql';
//mysql connection

 

const db = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,

});

export default db;

