const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'anjana-products', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'], // Allowed formats
  },
});

// Create multer upload middleware
const upload = multer({ storage: storage });

module.exports = { cloudinary, upload };