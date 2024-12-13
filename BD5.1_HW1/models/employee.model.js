let { DataTypes, sequelize } = require('../lib/');

let employee = sequelize.define('employee', {
  name: DataTypes.TEXT,
  department: DataTypes.TEXT,
  salary: DataTypes.INTEGER,
  doj: DataTypes.DATE,
});
module.exports = {
  employee,
};
