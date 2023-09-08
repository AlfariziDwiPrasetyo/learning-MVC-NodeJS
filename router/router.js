const express = require("express");
const { getAllEmployee, getOneEmployee } = require("../controller/getEmployee");
const postEmployee = require("../controller/postEmployee");
const deleteEmployee = require("../controller/deleteEmployee");
const router = express.Router();

// get employee
router.get("/", getAllEmployee);

router.get("/:id", getOneEmployee);

//post employee
router.post("/create", postEmployee);

//delete employee
router.delete("/:id", deleteEmployee);

module.exports = router;
