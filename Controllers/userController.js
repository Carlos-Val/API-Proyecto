const mongoose = require('mongoose');
const User = require('../Models/user');




let userController = {
    //METODOS CRUD


    //CREATE -C- Dar de alta usuario

    async createUser(req, res) {
        const body = req.body;

        try {

            const createdUser = await User.create(body);
            res
                .status(201)
                .json(createdUser);
        } catch (err) {
            res
                .status(500)
                .json({
                    message: err
                });
        }
    },

    //READ -R- Traer un usuario por ID
    async bringUser(req, res) {
        const _id = req.params.id;

        try {
            const users = await User.findById({ _id });
            res
                .status(200)
                .json(users);

        } catch (error) {
            res.status(400)
                .json({
                    message: err
                });
        }
    },


    //READ -R- Traer todos los usuarios

    async bringUsers(req, res) {
        try {
            const users = await User.find();
            res
                .status(200)
                .json(users);
        } catch (error) {
            res
                .status(400)
                .json({
                    message: err
                });
        }

    },



    //UPDATE -U- Modificar datos de ususario

    async updateUser(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const updatedUser = await User.findByIdAndUpdate(
                _id,
                body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({
                    message: err
                })
            }
            res.status(200)
                .json(updatedUser)
        } catch (err) {
            res
                .status(500)
                .json({
                    message: err
                })
        }
    },



    //DELETE -D- Borrar usuarios
    async deleteUser(req, res) {
        const _id = req.params.id;
        try {
            const removedUser = await User.findByIdAndDelete({ _id });
            if (!removedUser) {
                return res.status(404).json({
                    message: err
                })
            }
            res.json(removedUser)
        } catch (err) {
            res
                .status(400)
                .json({
                    message: err
                })
        }
    },


}

module.exports = userController;