const ProductoModel = require("../models/Productos")
const connectDB = require("../config/database")

connectDB()

ProductoModel.create({

    nombre: "CHOCOLATE BLANCO",
    valorProducto: 5000,
    categoria: "CHOCOLATES",
    region: "ANDINA",
    cantidad: 5,
    Usuarios: "635075ee115f2b20fcac3ac8",
    registro: new Date().toISOString(),
 
})
.then(() => { console.log("se creo el producto") })
.catch(() => { console.log("Error, no se creo el Producto") })