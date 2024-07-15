const { addImage, getImages, getImageById, updateImage, deleteImage, getImagesByCategory, getImagesByYear, getImagesByMonth } = require('../services/imageService');

const createimage = async (req, res) => {
    const image = req.body;
    try {
        const message = await addImage(image);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getimages = async (req, res) => {
    try {
        const images = await getImages();
        res.json(images);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getimage = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await getImageById(id);
        res.json(image);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const updateimage = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const message = await updateImage(id, updatedData);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteimage = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await deleteImage(id);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getImagesByCategoryController = async (req, res) => {
    const { category } = req.params;
    try {
        const message = await getImagesByCategory(category);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getImagesByYearController = async (req, res) => {
    const { year } = req.params;
    try {
        const message = await getImagesByYear(year);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getImagesByMonthController = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await getImagesByMonth();
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports = { createimage, getimages, getimage, updateimage, deleteimage, getImagesByCategoryController, getImagesByYearController, getImagesByMonthController  };
