const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    category_name: {  // Changed from 'name' to 'category_name'
      type: String,
      required: true,  // Fixed 'require' to 'required'
    },
    description: {
      type: String,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('category', categorySchema);
