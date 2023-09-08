const express = require("express");
const { getAllEmployee, getOneEmployee } = require("../controller/getEmployee");
const postEmployee = require("../controller/postEmployee");

const router = express.Router();

// get employee
router.get("/", getAllEmployee);

router.get("/:id", getOneEmployee);

//post employee
router.post("/create", postEmployee);

module.exports = router;
