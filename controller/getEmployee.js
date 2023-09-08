const Employee = require("../models/employee");

const getAllEmployee = async (req, res) => {
  const employee = await Employee.find();
  res.json(employee);
};
const getOneEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

module.exports = { getAllEmployee, getOneEmployee };
