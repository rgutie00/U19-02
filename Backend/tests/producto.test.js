const ProductoModel = require("../models/Productos")
const connectDB = require("../config/database")

connectDB()

ProductoModel.create({

    nombre: "MANJAR BLANCO",
    valorProducto: 5000,
    categoria: "DULCES",
    region: "PACIFICA",
    cantidad: 5,
    imagen: "",
    Usuarios: "63581ba733e5dcba38ba9c0d",
    registro: new Date().toISOString(),
 
})
.then(() => { console.log("se creo el producto") })
.catch(() => { console.log("Error, no se creo el Producto") })