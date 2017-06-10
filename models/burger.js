var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Burger = sequelize.define("burger", {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
}, {
    timestamps: true
  });

// Syncs with DB
Burger.sync();


module.exports = Burger;
