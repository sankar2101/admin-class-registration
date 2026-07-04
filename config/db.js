const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "class_registration", // database name
  "root",               // mysql username
  "Sankar#123",                   // mysql password
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
    logging: false,
  }
);

sequelize.authenticate()
.then(() => {
  console.log("✅ MySQL Connected Successfully");
})
.catch((err) => {
  console.log("❌ Connection Error:");
  console.log(err.message);
});

module.exports = sequelize;