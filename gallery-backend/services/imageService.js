const { db } = require('../config/firebaseConfig');

const addImage = async (image) => {
    const { id, title} = image;
    try {
        await db.collection('images').doc(id).set(image);
        return `La imagen ${title} fue agregado correctamente con ID ${id}!`;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};
const getImageById = async (id) => {
    try {
        const imageDoc = await db.collection('images').doc(id).get();
        if (imageDoc.exists) {
            return { id: imageDoc.id, ...imageDoc.data() };
        } else {
            throw new Error('image not found');
        }
    } catch (error) {
        console.error('Error getting document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

const getImages = async () => {
    try {
        const images = await db.collection('images').get();
        return images.docs.map(image => ({ id: image.id, ...image.data() }));
    } catch (error) {
        console.error('Error getting documents: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

const updateImage = async (id, updatedData) => {
    try {
        await db.collection('images').doc(id).update(updatedData);
        return `El image con ID ${id} fue actualizado correctamente.`;
    } catch (error) {
        console.error('Error updating document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

const deleteImage = async (id) => {
    try {
        await db.collection('images').doc(id).delete();
        return `El image con ID ${id} fue eliminado correctamente.`;
    } catch (error) {
        console.error('Error deleting document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};
const getImagesByCategory = async (category) => {
    try {
        const imagesSnapshot = await db.collection('images').where('category', '==', category).get();
        if (imagesSnapshot.empty) {
            throw new Error('No images found for this category');
        }
        return imagesSnapshot.docs.map(image => ({ id: image.id, ...image.data() }));
    } catch (error) {
        console.error('Error getting documents by category: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

// Obtener imágenes por año
const getImagesByYear = async (year) => {
    try {
        const imagesSnapshot = await db.collection('images').where('year', '==', year).get();
        if (imagesSnapshot.empty) {
            throw new Error('No images found for this year');
        }
        return imagesSnapshot.docs.map(image => ({ id: image.id, ...image.data() }));
    } catch (error) {
        console.error('Error getting documents by year: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

// Obtener imágenes por mes
const getImagesByMonth = async (year, month) => {
    try {
        const imagesSnapshot = await db.collection('images')
            .where('year', '==', year)
            .where('month', '==', month)
            .get();
        if (imagesSnapshot.empty) {
            throw new Error('No images found for this month');
        }
        return imagesSnapshot.docs.map(image => ({ id: image.id, ...image.data() }));
    } catch (error) {
        console.error('Error getting documents by month: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

module.exports = { addImage, getImages, getImageById, deleteImage, updateImage, getImagesByCategory, getImagesByYear, getImagesByMonth };