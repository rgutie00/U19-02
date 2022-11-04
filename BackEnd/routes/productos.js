const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crea productos
// api/productos
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del producto es obligatorio").not().isEmpty()],
  productosController.crearProducto
);

// Obtener productos

router.get("/", auth, productosController.obtenerProducto);

//Actualizar producto vía ID
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del producto es obligatorio").not().isEmpty()],
  productosController.actualizarProducto
);

//Eliminar un producto
router.delete(
  "/:id",
  auth,
  productosController.eliminarProducto
);


module.exports = router;

