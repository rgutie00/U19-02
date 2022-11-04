const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });



const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Conectada en ", process.env.DB_MONGO);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarDB;

/*const conexionDB = () => {
  mongoose
  .connect("mongodb://localhost:27017/midulceonline")
  .then(() => {
    console.log("Se conectó a la Base de datos midulceonline");
  })
  .catch(() => {
    console.log("No se conecto a la Base de datos");
  });
}
  


module.exports = conexionDB;*/
