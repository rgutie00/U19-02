const {Schema, model} = require("mongoose")

// 1. Crear esquema
const productoSchema = new Schema( {
    nombre: String,
    valorProducto: Number,
    categoria: String,
    region: String,
    cantidad: Number,
    imagen: String,
    Usuario: {
               type: Schema.Types.ObjectId,
               ref: "Usuario",
               },
    registro: { type: Date, default: Date.now() },
  
})

const ProductoModel = model("producto", productoSchema)

module.exports = ProductoModel