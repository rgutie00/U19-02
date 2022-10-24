const mongoose = require("mongoose");

const ProductosSchema = mongoose.Schema({
    nombre: String,
    valor: String,
    categoria: String,
    region: String,
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    registro: { type: Date, default: Date.now() },
  })

  module.exports = mongoose.model("Productos", ProductosSchema);
