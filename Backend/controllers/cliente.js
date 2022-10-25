const { request, response } = require("express")
const {hashSync, genSaltSync, compareSync} = require("bcryptjs")
const ClienteModel = require("../models/cliente")


// CREARCLIENTE
async function crearCliente(req = request, res = response) {
  const { numDocumento, password } = req.body

  const clienteEncontrado = await ClienteModel.findOne({
    numDocumento
  })

  // VALIDACION
  if (clienteEncontrado) {
    res.status(400).send({ mensaje: "El cliente ya existe" })
  } else {

    const passwordEncrypted = hashSync(password, genSaltSync())
    
    req.body.password = passwordEncrypted

    ClienteModel.create(req.body)
      .then((clienteCreado) => {
        res.status(201).send({ mensaje: "Se creo el cliente", clienteCreado })
      })
      .catch(() => {
        res.send({ mensaje: "No se logro crear el cliente" })
      })
  }
}

async function getClientes(req = request, res = response) {
  const { id, email, numDocumento, departamento } = req.query

  if(id || email || numDocumento || departamento ){
    const cliente = await ClienteModel.findOne({$or: [{_id: id},{email},{numDocumento}, {departamento}] })
    return res.send(cliente) 
  } else {
    const listaClientes = await ClienteModel.find()
    res.send(listaClientes)
  }

}

async function getCliente(req = request, res = response) {
  const { id } = req.params

  const cliente = await ClienteModel.find({id})

  res.send(cliente)
}

async function modificarCliente(req = request, res = response) {

  const {id, ...cliente} = req.body

  //const passwordEncrypted = hashSync(password, genSaltSync())
  //cliente.password = passwordEncrypted

  //await ClienteModel.updateOne(id, cliente )
  const clienteModificado = await ClienteModel.findByIdAndUpdate(id, cliente)
  console.log(clienteModificado)


  res.send(clienteModificado)

}

async function borrarCliente(req = request, res = response) {
  
  const {id} = req.body

  const object = await ClienteModel.findByIdAndDelete(id)

  res.status(201).send({ mensaje: "Cliente Eliminado", Object })


  res.send(object)

}


module.exports = { crearCliente, getClientes, getCliente, modificarCliente, borrarCliente }
