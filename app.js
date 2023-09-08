const express = require("express");
const Employee = require("./models/employee");

const router = require("./router/router");
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// route
app.use("/employee", router);

app.listen(port, () => {
  console.log("Server is running......");
});
