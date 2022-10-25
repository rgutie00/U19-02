const {request, response} = require("express")
const ProductoModel = require("../models/producto")
const path = require("path")

function guardarImagen(req = request, res = response){


  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el archivo" })
  }

  // Extrae el archivo segun el nombre (en este caso "archivo")
  const archivo = req.files.imagen
  const uploadPath = path.join(__dirname, "../imagenes/", archivo.name)

  // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
  archivo.mv(uploadPath, (error) => {
    if (error) return res.status(500).send(error)

    res.send("Archivo cargado corectamente")
  })

}


async function guardarProducto(req = request, res = response) {
  
  const producto = new ProductoModel(req.body)
  await producto.save()

  res.send({producto, mensaje: "se creo el producto"})
}


async function getProductos(req = request, res = response) {
  const { id, nombre, categoria, region } = req.query

  if(id || nombre || categoria || region ){
    const producto = await ProductoModel.find({$or: [{_id: id},{nombre},{categoria}, {region}] })
    return res.send(producto) 
  } else {
    const listaproductos = await ProductoModel.find()
    res.send(listaproductos)
  }

}

async function getProducto(req = request, res = response) {
  const { id } = req.params

  const producto = await ProductoModel.find({id})

  res.send(producto)
}

async function modificarProducto(req = request, res = response) {

  const {id, ...producto} = req.body

  
  //await ClienteModel.updateOne(id, cliente )
  const productoModificado = await ProductoModel.findByIdAndUpdate(id, producto)
  console.log(productoModificado)

  res.send(productoModificado)

}

async function borrarProducto(req = request, res = response) {
  
  const {id} = req.body

  const object = await ProductoModel.findByIdAndDelete(id)

  res.status(201).send({ mensaje: "Producto Eliminado", Object })


  res.send(object)

}


function getImagenProducto(req = request, res = response) {
  
  const {nombre} = req.query
  const rutaImagen = path.join(__dirname, "../imagenes/", nombre)

  return res.sendFile(rutaImagen)

}



module.exports = {guardarProducto, guardarImagen, getProductos, getProducto, modificarProducto, borrarProducto, getImagenProducto }