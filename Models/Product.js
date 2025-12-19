const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // image URL or filename
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);