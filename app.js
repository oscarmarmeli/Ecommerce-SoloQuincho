const express = require("express");
// const indexRoutes = require("./routes/indexRoutes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
// const Product = require("./models").productos;
// const Usuarios = require("./models").usuarios;
const PORT = 3000;

// app.set("view engine", "ejs"); //motor de plantillas ejs
// app.use(express.static("public")); //carpeta publica para archivos estaticos (css, js, img, etc)
app.use(express.urlencoded({ extended: true })); //para poder leer los datos de un formulario
app.use(express.json()); //para poder leer los datos de un formulario
app.use(cookieParser()); //Configurar cookie-parser

// Configurar express-session
app.use(
 session({
   secret: "mi_secreto", // Cambia esto por una cadena secreta única para tu aplicación
   resave: false,
   saveUninitialized: false,
   cookie: {
     secure: false, // Configura a true si estás utilizando HTTPS
     httpOnly: true,
     maxAge: 3600000, // Tiempo de expiración de la cookie en milisegundos (aquí se establece a 1 hora)
   },
 })
);

// rutas principales, a las que se puede acceder sin estar logeado, ej pagina de inicio, pagina de registro, pagina de login
app.use("/", require("./routes/routes")); //contiene la vista index, login, registro
// rutas protegidas, solo pueden acceder los que inician sesion, ej pagina de perfil
// app.use("/admin", require("./routes/adminRoutes")); //contiene la vista perfil
// // rutas de api para usuarios, para la lógica CRUD en usuarios. (GET, POST, PUT, DELETE)
// app.use("/api/usuarios",require("./routes/usuariosRoutes"));

// Ejemplo de función asincrónica con async/await
function delay(ms) {
  // Simula una operación asincrónica, muestra un mensaje por consola
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Operación asincrónica completada.");
      resolve();
    }, [ms])
  );
}

app.use("/test", async (req, res) => {
  try {
    const result = await delay(5000);
    res.send({ msg: "Mensaje post promise", result });
  } catch (error) {
    console.log(error);
    res.send("Ocurrio un error");
  }
});

//Server setup
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
