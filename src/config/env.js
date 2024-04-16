const dotenv = require('dotenv');

dotenv.config();

const ENV = {
    PORT: process.env.PORT,
    PASSCODE: process.env.PASSCODE
}

module.exports = ENV;