const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conexionDB = () => {
  mongoose
  .connect("mongodb://localhost:27017/midulceonline")
  .then(() => {
    console.log("Se conectó a la Base de datos midulceonline");
  })
  .catch(() => {
    console.log("No se conecto a la Base de datos");
  });
}
  


module.exports = conexionDB;
