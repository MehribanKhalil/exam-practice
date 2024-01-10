import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/productController.js'

const router =express.Router()

router.post('/product',createProduct)
router.get('/product',getProduct)
router.get('/product/:id',getProductById)
router.delete('/product/:id',deleteProduct)
router.put('/product/:id',updateProduct)

export default router