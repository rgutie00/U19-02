const Pedido = require("../models/Pedidos");
const producto = require("../models/Productos");
const { validationResult } = require("express-validator");

exports.crearPedido = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  try {
    //crear un nuevo pedido
    const pedido = new Pedido(req.body);

    pedido.creador = req.usuario.id;

    pedido.save();
    res.json(pedido);
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.obtenerPedido = async (req, res) => {
  try {
    const pedido = await Pedido.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ pedidos });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.actualizarPedido = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  const { nombre } = req.body;
  const nuevoPedido = {};

  if (nombre) {
    nuevoPedido.nombre = nombre;
  }

  try {
    let pedido = await Pedido.findById(req.params.id);

    if (!pedido) {
      return res.status(400).json({ msg: "Proyecto no encontrado" });
    }

    if (pedido.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    ppedido = await Producto.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoPedido },
      { new: true }
    );

    res.json({ pedido });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.eliminarPedido = async (req, res) => {
  try {
    let pedido = await Pedido.findById(req.params.id);

    if (!pedido) {
      return res.status(400).json({ msg: "Producto no encontrado" });
    }

    if (pedido.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    await Pedido.remove({ _id: req.params.id });
    res.json({ msg: "Producto eliminado" });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
