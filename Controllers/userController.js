//const userDatabase = require("../storage/userDb");
const userModel = require('../models/user');


let database = new userDatabase();


class UserController {

    constructor() {

    }


    //MÉTODOS CRUD 
    //CREATE -C- Dar un alta

    async registerUser(req, res) {
        //funcion controladora con la lógica que registra al usuario

        try {
            let user = new userModel(body.name, body.surname, body.idUser, body.dni, body.email, body.password, body.phone, body.address, body.payment);

            let seteo = await database.set(user);

            if (seteo) {
                res.send("Bien!!! hemos guardado usuario");
            }
        } catch {
            console.log("error en usuario");
        }
        return
    }

    //READ -R- Traernos datos

    async bringUser(req, res) {
        //función controladora con la lógica que muestra los usuarios
    }

    async bringUserId(req, res) {
        //función controladora con la lógica que trae un usuario según su id
    }

    //UPDATE -U- Modificar datos

    async updateUser(req, res) {
        //función controladora con la lógica que actualiza un usuario
    }


    //DELETE -D- Borrar datos

    async deleteUser(req, res) {
        //función controladora con la lógica que elimina un usuario
    }

}


let userController = new UserController;
module.exports = userController;