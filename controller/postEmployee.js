const createEmployee = require("../utils/createEmployee");

const postEmployee = async (req, res) => {
  const { name, salary, role } = req.body;
  const createdEmployee = await createEmployee(name, salary, role);
  res.json(createdEmployee);
};

module.exports = postEmployee;
