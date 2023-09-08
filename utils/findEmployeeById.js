const Employee = require("../models/employee");

const findEmployeeById = async (id) => {
  const employee = await Employee.findById(id);
  return employee;
};

module.exports = findEmployeeById;
