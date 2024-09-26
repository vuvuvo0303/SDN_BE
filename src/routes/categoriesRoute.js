const express = require('express');
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const router = express.Router();

router.post('/category/create', createCategory);
router.post('/categories', getCategories);
router.get('/category/:_id', getCategoryById);
router.put('/category/:_id', updateCategory);
router.delete('/category/:_id', deleteCategory);

module.exports = router;
