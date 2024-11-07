import userSchema from "../models/users.js";

//Creamos el ler endpoint
const CreateUser = (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
}
//2.Creamos la ruta para obtener todos los documentos de mi bdd en la colection users
const  docsuser = (req, res) => {
    userSchema
    .find() //Metodo para buscar todos los docs de una coleccion
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error })); 
};

// 3.Creamos la ruta para consultar un documento de mi bdd en la coleccion users
const Consultar = (req, resp) => {
    const {id} = req.params;
    userSchema
    .findById(id) //Metodo usado para buscar un documento de una coleccion
    .then((data) => resp.json(data))
    .catch((error) => res.json({ message: error }));
}

// 4.Creamos la ruta para actualizar un documento en la coleccion users
const Actualizar = (req,resp) => {
    const {id} = req.params;
    const { nombre, edad, genero } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { nombre, edad, genero  } })
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error }));
}

// 5.Creamos la ruta para borrar un documento de mi bdd en la coleccion users
const borrar = (req,resp) => {
    const {id} = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error }));
}


export { Actualizar, Consultar, CreateUser, borrar, docsuser };


