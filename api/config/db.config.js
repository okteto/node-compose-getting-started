
module.exports = {
    HOST: "mysql",
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: "okteto",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };