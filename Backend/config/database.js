const mongoose = require("mongoose")

// 1. Conectarse

const conexionDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/midulceonline")
    .then(() => {
      console.log("connection successful")
    })
    .catch(() => {
      console.log("no connection")
    })
}

module.exports = conexionDB
