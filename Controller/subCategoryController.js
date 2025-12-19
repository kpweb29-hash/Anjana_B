const SubCategory = require('../Models/SubCategory');

// Create a new subcategory
const createSubCategory = async (req, res) => {
  try {
    const { categoryId, subCategoryName, status } = req.body;

    const subCategory = new SubCategory({
      categoryId,
      subCategoryName,
      status
    });

    await subCategory.save();
    res.status(201).json({ message: 'SubCategory created successfully', subCategory });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all subcategories
const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('categoryId');
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get subcategories by category ID
const getSubCategoriesByCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ categoryId: req.params.categoryId }).populate('categoryId');
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single subcategory by ID
const getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id).populate('categoryId');
    if (!subCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a subcategory
const updateSubCategory = async (req, res) => {
  try {
    const { categoryId, subCategoryName, status } = req.body;

    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      { categoryId, subCategoryName, status },
      { new: true, runValidators: true }
    ).populate('categoryId');

    if (!subCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }

    res.json({ message: 'SubCategory updated successfully', subCategory });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a subcategory
const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);

    if (!subCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }

    res.json({ message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoriesByCategory,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory
};