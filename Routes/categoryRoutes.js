const express = require('express');
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require('../Controller/categoryController');

const router = express.Router();

// POST /category - Create a new category
router.post('/', createCategory);

// GET /category - Get all categories
router.get('/', getAllCategories);

// GET /category/:id - Get a single category by ID
router.get('/:id', getCategoryById);

// PUT /category/:id - Update a category
router.put('/:id', updateCategory);

// DELETE /category/:id - Delete a category
router.delete('/:id', deleteCategory);

module.exports = router;