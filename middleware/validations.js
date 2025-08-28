const { body, validationResult } = require("express-validator");
const validateAddedProducts = [
  body("Nombre").notEmpty().withMessage("Debes ingresar el nombre"),
  body("Descripcion").notEmpty().withMessage("Debes ingresar la descripcion"),
  body("Price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  body("Categoria").notEmpty().withMessage("Debes ingresar la categoria"),
  body("Url").notEmpty().withMessage("Debes ingresar la url"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];
const validateUpdatedProducts = [
  body("Nombre").notEmpty().withMessage("Debes ingresar el nombre"),
  body("Descripcion").notEmpty().withMessage("Debes ingresar la descripcion"),
  body("Price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  body("Categoria").notEmpty().withMessage("Debes ingresar la categoria"),
  body("Url").notEmpty().withMessage("Debes ingresar la url"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];
module.exports = { validateAddedProducts, validateUpdatedProducts };
