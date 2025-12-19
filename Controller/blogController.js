const Blog = require('../Models/Blog');

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, shortDescription, status } = req.body;
    const image = req.file ? req.file.path : null;

    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const blog = new Blog({
      image,
      title,
      shortDescription,
      status
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { title, shortDescription, status } = req.body;
    const image = req.file ? req.file.path : undefined; // Only update if new image provided

    const updateData = { title, shortDescription, status };
    if (image) {
      updateData.image = image;
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};