//Conexion a mongodb
import dotenv from "dotenv";
import mongoose from "mongoose";

//Cargamos las variables de entorno
dotenv.config();

//Conectamos con nuestra base de datos
const port = process.env.PORT || 3005;
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Conectado a mongodb"))
.catch((error) => console.log(error));

export default port;