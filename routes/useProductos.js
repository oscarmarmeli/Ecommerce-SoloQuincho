app.use("/api/productos", async function getProductos(req, res) {
  const data = await productos.findAll();
  res.json(data);
});

// obtenemos todos los productos de la tabla Product
app.get("/", async (req, res) => {
  // la primera vez que se ejecuta, se crea la tabla
  //   await Product.sync({ force: true });
  const productos = await Product.findAll();
  res.json({ data: productos });
});

// obtenemos un producto de la tabla Product
app.get("/:id", async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  res.json({ data: producto });
});

// crear un producto
app.post("/", async (req, res) => {
  //METODO 1: Desestructurar req.body y crear el producto
  //   const { ...newProduct } = req.body;
  //   OR
  //   const newProduct = req.body;
  //   const producto = await Product.create(newProduct);
  //   await Product.sync({ force: true }); // la primera vez
  try {
    const { id_producto, nombre, precio, id_categoria } = req.body;
    if (!nombre || !precio) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    const producto = await Product.create({
      id_producto,
      nombre,
      precio,
      id_categoria,
    });
    res.status(201).json({ message: "Producto creado", data: producto });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// actualizar un producto
app.put("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "No existe el producto" });
    }
    const { nombre, precio } = req.body;
    await producto.update({ nombre, precio });
    res.json({ message: "Producto actualizado", data: producto });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// eliminar un producto
app.delete("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "No existe el producto" });
    }
    await producto.destroy();
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});
