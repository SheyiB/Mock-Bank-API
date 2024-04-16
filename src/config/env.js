const dotenv = require('dotenv');

dotenv.config();

const ENV = {
    PORT: process.env.PORT,
    PASSCODE: process.env.PASSCODE,
    HOST: process.env.HOST,
    USER: process.env.SQL_USER,
    PASSWORD: process.env.SQL_PASSWORD,
    DB: process.env.DB,
    DIALECT: process.env.DIALECT,
    POOL_MAX: process.env.POOL_MAX,
    POOL_MIN: process.env.POOL_MIN,
    POOL_ACQUIRE: process.env.POOL_ACQUIRE,
    POOL_IDLE: process.env.POOL_IDLE
}

module.exports = ENV;