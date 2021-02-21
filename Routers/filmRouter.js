const router = require("express").Router();

const filmController = require("../Controllers/filmController");


//ENDPOINTS CRUD

//Endpoint para guardar una película

router.post('/saveFilm', async(req, res) => {
    const body = req.body;
    res.json(await filmController.createFilm(body))
});

//Endpoint para traer las películas

router.get('/allFilms', async(req, res) => {
    res.json(await filmController.bringFilms)
});


module.exports = router;