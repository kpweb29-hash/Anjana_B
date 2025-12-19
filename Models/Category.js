const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true, // true = active, false = inactive
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);