const Employee = require("../models/employee");

const deleteEmployee = async (req, res) => {
  const employee = await Employee.findOneAndRemove({ _id: req.params.id });
  const currentEmployee = await Employee.find();
  res.json(currentEmployee);
};

module.exports = deleteEmployee;
