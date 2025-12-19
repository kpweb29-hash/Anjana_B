const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');

  // Routes
  const adminRoutes = require('./Routes/adminRoutes');
  app.use('/admin', adminRoutes);

  const categoryRoutes = require('./Routes/categoryRoutes');
  app.use('/category', categoryRoutes);

  const subCategoryRoutes = require('./Routes/subCategoryRoutes');
  app.use('/subcategory', subCategoryRoutes);

  const productRoutes = require('./Routes/productRoutes');
  app.use('/product', productRoutes);

  const blogRoutes = require('./Routes/blogRoutes');
  app.use('/blog', blogRoutes);

  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.log(err));