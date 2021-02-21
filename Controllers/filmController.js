const mongoose = require('mongoose');
const filmModel = require("../Models/film");
//const filmDatabase = require("../Storage/filmDb");



let filmController = {
    //METODOS CRUD


    //CREATE -C- Dar de alta

    async createFilm(req, res) {
        const body = req.body;
        try {
            const createdFilm = await Film.create(body);
            res
                .status(201)
                .json(createdFilm);
        } catch (err) {
            res
                .status(500)
                .json({
                    message: err
                });
        }
    },

    //READ -R- Traer una pelicula
    async bringFilm(req, res) {
        const _id = req.params.id;

        try {
            const films = await Film.findOne({ _id });
            res
                .status(200)
                .json(films);

        } catch (error) {
            res.status(400)
                .json({
                    message: err
                });
        }
    },
    //READ -R- Traer todas las peliculas

    async bringFilms(req, res) {
        try {
            const films = await Film.find();
            res
                .status(200)
                .json(films);
        } catch (error) {
            res
                .status(400)
                .json({
                    message: err
                });
        }

    },

    //UPDATE -U- Modificar datos

    async updateFilm(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const updatedFilm = await Film.findByIdAndUpdate(
                _id,
                body, { new: true });
            if (!updatedFilm) {
                return res.status(404).json({
                    message: err
                })
            }
            res.status(200)
                .json(updatedFilm)
        } catch (err) {
            res
                .status(500)
                .json({
                    message: err
                })
        }
    },



    //DELETE -D- Borrar datos
    async deleteFilm(req, res) {
        const _id = req.params.id;
        try {
            const removedFilm = await Film.findByIdAndDelete({ _id });
            if (!removedFilm) {
                return res.status(404).json({
                    message: err
                })
            }
            res.json(removedFilm)
        } catch (err) {
            res
                .status(400)
                .json({
                    message: err
                })
        }
    },


}

//let filmController = new FilmController;
module.exports = filmController;