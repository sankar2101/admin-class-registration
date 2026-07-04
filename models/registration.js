const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Class = require("./Class");

const Registration = sequelize.define("Registration", {

  studentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
  },

  phone: {
    type: DataTypes.STRING,
  },

  city: {
    type: DataTypes.STRING,
  },

  paymentProof: {
    type: DataTypes.STRING,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "Pending",
  },

});

Class.hasMany(Registration);

Registration.belongsTo(Class);

module.exports = Registration;