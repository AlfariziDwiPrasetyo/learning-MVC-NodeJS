const getAllEmployee = (req, res) => {
  res.json({
    success: "Success",
  });
};

const getOneEmployee = (req, res) => {
  res.json({
    success: `Success ${req.params.id}`,
  });
};

module.exports = { getAllEmployee, getOneEmployee };
