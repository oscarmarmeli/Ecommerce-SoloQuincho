const express = require("express");
const {
  addProducts,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/controllers");
const { validateAddedProducts, validateUpdatedProducts } = require("../middleware/validations");
const router = express();
router.post("/productos", validateAddedProducts, addProducts);
router.get("/productos", readProducts);
router.get("/productos/:id", readProduct);
router.put("/productos/:id", validateUpdatedProducts, updateProduct);
router.delete("/productos/:id", deleteProduct);
module.exports = router;