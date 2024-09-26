const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const router = express.Router();

router.post('/product/create', createProduct);
router.post('/products', getProducts);
router.get('/product/:_id', getProductById);
router.put('/product/:_id', updateProduct);
router.delete('/product/:_id', deleteProduct);

module.exports = router;
