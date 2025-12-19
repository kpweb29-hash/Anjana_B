const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategoryName: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);