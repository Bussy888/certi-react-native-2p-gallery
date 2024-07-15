import imageInstance from './imageInstance';

// Obtener todas las imágenes
export const getAllImages = () => {
    return imageInstance.get('/');
};

// Obtener imágenes por categoría
export const getImagesByCategory = (category) => {
    return imageInstance.get(`/category/${category}`);
};

// Obtener imágenes por año
export const getImagesByYear = (year) => {
    return imageInstance.get(`/year/${year}`);
};

// Obtener imágenes por mes
export const getImagesByMonth = (year, month) => {
    return imageInstance.get(`/year/${year}/month/${month}`);
};
