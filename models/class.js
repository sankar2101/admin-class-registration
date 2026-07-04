const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Class = sequelize.define("Class", {

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  classDate: {
    type: DataTypes.DATE,
  },

  maxStudents: {
    type: DataTypes.INTEGER,
  },

  registrationDeadline: {
    type: DataTypes.DATE,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "Active",
  },

});

module.exports = Class;