//Rutas para crear Pedido

const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidosController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crear Pedido
//api/pedidos

router.post("/",auth, [check("numeropedido", "NUmero Pedido es obligatorio").not().isEmpty()],  pedidoController.crearpedido
);

router.get("/", auth, pedidoController.obtenerpedido);

router.put("/:id", auth, pedidoController.actualizarpedido);

router.delete('/:id',auth,pedidoController.eliminarpedido);

module.exports = router;
