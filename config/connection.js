// Set up MySQL connection.

var Sequelize = require("sequelize");
var sequelize = new Sequelize("burgers_db", "root", "valmont", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exporting our connection
module.exports = sequelize;
