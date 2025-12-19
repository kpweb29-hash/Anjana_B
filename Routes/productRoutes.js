const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductsByCategory,
  getProductsBySubCategory,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../Controller/productController');
const { upload } = require('../config/cloudinary');

const router = express.Router();

// POST /product - Create a new product
router.post('/', upload.single('image'), createProduct);

// GET /product - Get all products
router.get('/', getAllProducts);

// GET /product/category/:categoryId - Get products by category ID
router.get('/category/:categoryId', getProductsByCategory);

// GET /product/subcategory/:subCategoryId - Get products by subcategory ID
router.get('/subcategory/:subCategoryId', getProductsBySubCategory);

// GET /product/:id - Get a single product by ID
router.get('/:id', getProductById);

// PUT /product/:id - Update a product
router.put('/:id', upload.single('image'), updateProduct);

// DELETE /product/:id - Delete a product
router.delete('/:id', deleteProduct);

module.exports = router;