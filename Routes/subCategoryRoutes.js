const express = require('express');
const {
  createSubCategory,
  getAllSubCategories,
  getSubCategoriesByCategory,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory
} = require('../Controller/subCategoryController');

const router = express.Router();

// POST /subcategory - Create a new subcategory
router.post('/', createSubCategory);

// GET /subcategory - Get all subcategories
router.get('/', getAllSubCategories);

// GET /subcategory/category/:categoryId - Get subcategories by category ID
router.get('/category/:categoryId', getSubCategoriesByCategory);

// GET /subcategory/:id - Get a single subcategory by ID
router.get('/:id', getSubCategoryById);

// PUT /subcategory/:id - Update a subcategory
router.put('/:id', updateSubCategory);

// DELETE /subcategory/:id - Delete a subcategory
router.delete('/:id', deleteSubCategory);

module.exports = router;