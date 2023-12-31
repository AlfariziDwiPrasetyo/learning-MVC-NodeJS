const express = require("express");

const { getAllEmployee, getOneEmployee } = require("../controller/getEmployee");
const postEmployee = require("../controller/postEmployee");
const deleteEmployee = require("../controller/deleteEmployee");
const updateEmployee = require("../controller/updateEmployee");
const router = express.Router();

// get employee
router.get("/", getAllEmployee);

router.get("/:id", getOneEmployee);

//post employee
router.post("/create", postEmployee);

//delete employee
router.delete("/:id", deleteEmployee);

//update employee
router.post("/:id", updateEmployee);

module.exports = router;
