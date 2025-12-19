const express = require('express');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../Controller/blogController');
const { upload } = require('../config/cloudinary');

const router = express.Router();

// POST /blog - Create a new blog
router.post('/', upload.single('image'), createBlog);

// GET /blog - Get all blogs
router.get('/', getAllBlogs);

// GET /blog/:id - Get a single blog by ID
router.get('/:id', getBlogById);

// PUT /blog/:id - Update a blog
router.put('/:id', upload.single('image'), updateBlog);

// DELETE /blog/:id - Delete a blog
router.delete('/:id', deleteBlog);

module.exports = router;