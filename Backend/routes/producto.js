const { Router } = require("express");
const { guardarProducto, guardarImagen, getProductos, getProducto, modificarProducto, borrarProducto, getImagenProducto  } = require("../controllers/producto");


const routerProducto = Router()

// ESTA ES LA RUTA PARA CREAR UN USUARIO
routerProducto.get("", getProductos)
routerProducto.put("", modificarProducto)
routerProducto.delete("", borrarProducto)
routerProducto.post("", guardarProducto )
routerProducto.get("/imagen", getImagenProducto )
routerProducto.post("/imagen", guardarImagen )
routerProducto.get("/:id", getProducto)

module.exports = routerProducto
