const UsuarioModel = require("../models/Usuario")
const connectDB = require("../config/database")

connectDB()

UsuarioModel.create({
  nombre: "RICARDO GUTIERREZ",
  email:  "rgutie00@live.com",
  password: "123456",
  tipoDocumento: "CEDULA",
  tipoUsuario:  "MASTER",
  estadoUsuario:"ACTIVO",
  numDocumento : "555866666",
  telefono: "35555555",
  departamento: "TOLIMA",
  ciudad: "IBAGUE",
  direccion: "CRA5 40-34",   
  registro:new Date().toISOString(),
})
.then(()=> {console.log("Se inserto el usuario")})
.catch((e)=>{console.error(e)})