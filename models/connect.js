const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yoerdanatan:sDHm0dnXmwW9vpPd@blogapp.coaqzo5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

module.exports = mongoose.connect;
