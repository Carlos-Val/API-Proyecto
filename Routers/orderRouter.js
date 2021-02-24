const router = require("express").Router();

const orderController = require("../Controllers/orderController");


//ENDPOINTS CRUD

//Endpoint para guardar una película

router.post('/saveOrder', orderController.createOrder);

//Endpoint para traer las películas

router.get('/getOrder/:id', orderController.bringOrder);
router.get('/allOrders', orderController.bringOrders);


//Endpoint para modificar las películas

router.put('/updateOrder/:id', orderController.updateOrder);

//Endpoint para borrar las películas

router.delete('/deleteOrder/:id', orderController.deleteOrder);




module.exports = router;