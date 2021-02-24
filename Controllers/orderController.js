const mongoose = require('mongoose');
const Order = require('../Models/order');




let orderController = {
    //METODOS CRUD


    //CREATE -C- Crear alquiler

    async createOrder(req, res) {
        const body = req.body;

        try {

            const createdOrder = await Order.create(body);
            res
                .status(201)
                .json(createdOrder);
        } catch (err) {
            res
                .status(500)
                .json({
                    message: err
                });
        }
    },

    //READ -R- Traer alquiler por ID
    async bringOrder(req, res) {
        const _id = req.params.id;

        try {
            const orders = await Order.findById({ _id });
            res
                .status(200)
                .json(orders);

        } catch (error) {
            res.status(400)
                .json({
                    message: err
                });
        }
    },


    //READ -R- Traer todos los alquileres

    async bringOrders(req, res) {
        try {
            const orders = await Order.find();
            res
                .status(200)
                .json(orders);
        } catch (error) {
            res
                .status(400)
                .json({
                    message: err
                });
        }

    },



    //UPDATE -U- Modificar datos del alquiler

    async updateOrder(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                _id,
                body, { new: true });
            if (!updatedOrder) {
                return res.status(404).json({
                    message: err
                })
            }
            res.status(200)
                .json(updatedOrder)
        } catch (err) {
            res
                .status(500)
                .json({
                    message: err
                })
        }
    },



    //DELETE -D- Borrar ordenes de alquiler
    async deleteOrder(req, res) {
        const _id = req.params.id;
        try {
            const removedOrder = await Order.findByIdAndDelete({ _id });
            if (!removedOrder) {
                return res.status(404).json({
                    message: err
                })
            }
            res.json(removedOrder)
        } catch (err) {
            res
                .status(400)
                .json({
                    message: err
                })
        }
    },
}

module.exports = orderController;