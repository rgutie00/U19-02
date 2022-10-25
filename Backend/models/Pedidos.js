const mongoose = require("mongoose");

const PedidosSchema = mongoose.Schema({
    numeroPedido: String,
    productoPedido: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productos",
    },
    provedorPedido: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    clientePedido: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    totalPedido: Number,
    cantidad: Number,
    creado: { type: Date, default: Date.now() }
    
  })

  module.exports = mongoose.model("Pedidos", PedidosSchema);
