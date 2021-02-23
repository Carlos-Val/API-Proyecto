const router = require("express").Router();

const userController = require("../Controllers/userController");


//ENDPOINTS CRUD

//Endpoint para guardar una película

router.post('/saveUser', userController.createUser);

//Endpoint para traer las películas

router.get('/getUser/:id', userController.bringUser);
router.get('/allUsers', userController.bringUsers);


//Endpoint para modificar las películas

router.put('/updateUser/:id', userController.updateUser);

//Endpoint para borrar las películas

router.delete('/deleteUser/:id', userController.deleteUser);




module.exports = router;