const express = require('express');
const {  createimage, getimages, getimage, updateimage, deleteimage, 
     getImagesByCategoryController, getImagesByYearController, getImagesByMonthController } = require('../controllers/imageController');
const router = express.Router();

// Ruta para crear un post
router.post('/', createimage);

// Ruta para obtener todos los posts
router.get('/', getimages);

router.get('/category/:category', getImagesByCategoryController);

router.get('/year/:year', getImagesByYearController);

router.get('/year/:year/month/:month', getImagesByMonthController);

// Ruta para obtener un post por ID
router.get('/:id', getimage);

// Ruta para actualizar un post por ID
router.put('/:id', updateimage);

// Ruta para eliminar un post por ID
router.delete('/:id', deleteimage);

module.exports = router;
