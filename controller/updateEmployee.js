const Employee = require("../models/employee");

const updateEmployee = async (req, res) => {
  const { name, salary, role } = req.body;
  const id = req.params.id;
  const updatedEmployee = await Employee.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        salary,
        role,
      },
    },
    {
      new: true,
    }
  );
  res.json(updatedEmployee);
};

module.exports = updateEmployee;
