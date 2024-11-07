//src/Index.js
import express from "express";
import port from "./Config/Conexion.js";
import clientesroutes from "./Routes/users.js";
const app = express();



app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenido");
});


//Cargamos las rutas
app.use("/users", clientesroutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
