const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://vlxszwvueejeqs:fce822ec25f91f220b6d68a4feaf634a5ebae5e28a527cdacf6a0777f84953e1@ec2-54-87-112-29.compute-1.amazonaws.com:5432/d8r5a1vdtibv1k',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
