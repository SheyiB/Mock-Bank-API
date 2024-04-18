const Sequelize = require("sequelize");

const {
  DB,
  HOST,
  USER,
  PASSWORD,
  DIALECT,
  POOL_ACQUIRE,
  POOL_IDLE,
  POOL_MAX,
  POOL_MIN,
} = require("../config/env");

const sequelizeInit = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: POOL_MAX,
    min: POOL_MIN,
    acquire: POOL_ACQUIRE,
    idle: POOL_IDLE,
  },
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelizeInit;

db.customer = require("./customer")(sequelizeInit, Sequelize);

db.sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = db;
