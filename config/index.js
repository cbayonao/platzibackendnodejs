require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'produccion',
    port: process.env.PORT || 3000,
    CORS: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPasswd: process.env.DB_PASSWD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
};

module.exports = { config };