const Employee = require("../models/employee");

const createEmployee = async (name, salary, role) => {
  const employee = await Employee.create({
    name,
    salary,
    role,
  });
  return employee;
};

module.exports = createEmployee;
