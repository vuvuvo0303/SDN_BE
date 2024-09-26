const Category = require("../models/category");

exports.createCategory = async (req, res) => {
  try {
    const isExisted = await Category.findOne({ category_name: req.body.category_name });
    if (isExisted) {
      return res.status(400).json({
        status: false,
        message: "Category name already exists!",
      });
    }

    const category = new Category(req.body);
    await category.save();
    res.status(201).json({
      status: true,
      message: "successful",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: true,
      message: "successful",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params._id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({
      status: true,
      message: "successful",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({
      status: true,
      message: "Update successful",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params._id, { is_deleted: true }, { new: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ status: true, message: "Delete successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
