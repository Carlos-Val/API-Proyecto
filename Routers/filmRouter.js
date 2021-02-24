const router = require("express").Router();

const filmController = require("../Controllers/filmController");


//ENDPOINTS CRUD

//Endpoint para guardar una película

router.post('/saveFilm', filmController.createFilm);

//Endpoint para traer las películas

router.get('/getFilm/:id', filmController.bringFilm);
router.get('/allFilms', filmController.bringFilms);
router.get('/getOneFilm/:title', filmController.bringFilmTitle);


//Endpoint para modificar las películas

router.put('/updateFilm/:id', filmController.updateFilm);

//Endpoint para borrar las películas

router.delete('/deleteFilm/:id', filmController.deleteFilm);




module.exports = router;