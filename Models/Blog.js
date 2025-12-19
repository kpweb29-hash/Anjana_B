const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String, // image URL / filename
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      maxlength: 300, // short desc limit
    },
    status: {
      type: Boolean,
      default: true, // published / unpublished
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);