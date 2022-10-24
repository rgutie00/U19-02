const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  tipoDocumento: {type: String, enum: ["CEDULA","TARJETA","NIT"]},
  tipoUsuario: {type: String, enum: ["CLIENTE","PROVEEDOR", "MASTER"]},
  estadoUsuario: {type: String, enum: ["ACTIVO","BLOQUEADO"]},
  numDocumento : String,
  telefono: String,
  departamento: String,
  ciudad: String,
  direccion: String,   
  registro: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Usuario", UsuariosSchema);
