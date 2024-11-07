import express from "express";
import { Actualizar, borrar, Consultar, CreateUser, docsuser } from "../Controlador/userController.js";

const router = express.Router();

//Creamos el ler endpoint
router.post("/users", CreateUser);

//2.Creamos la ruta para obtener todos los documentos de mi bdd en la colection users
router.get("/users", docsuser);

// 3.Creamos la ruta para consultar un documento de mi bdd en la coleccion users
router.get("/users/:id", Consultar);

// 4.Creamos la ruta para actualizar un documento en la coleccion users
router.put("/users/:id", Actualizar);


// 5.Creamos la ruta para borrar un documento de mi bdd en la coleccion users
router.delete("/users/:id",  borrar)

export default router;
