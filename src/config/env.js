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
    POOL_MAX: Number(process.env.POOL_MAX),
    POOL_MIN: Number(process.env.POOL_MIN),
    POOL_ACQUIRE: process.env.POOL_ACQUIRE,
    POOL_IDLE: process.env.POOL_IDLE,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRE: process.env.JWT_EXPIRE
}

module.exports = ENV;