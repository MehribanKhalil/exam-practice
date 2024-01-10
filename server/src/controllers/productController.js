import { Products } from "../models/productModel.js"

//CREATE PRODUCS
export const createProduct=async(req,res)=>{
    try {
        const newProduct= new Products({...req.body})
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
//GET PRODUCS
export const getProduct=async(req,res)=>{
    try {
        const products= await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:"product not found"})
    }
}
//GET PRODUCS BY ID
export const getProductById=async(req,res)=>{
    try {
        const {id}=req.params
        const product= await Products.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:"product not found"})
    }
}
//DELETE PRODUCS
export const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const product= await Products.findByIdAndDelete(id)
        res.status(200).json({message:"product deleted"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
//UPDATE PRODUCS
export const updateProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const product= await Products.findByIdAndUpdate(id,req.body)
        await product.save()
        res.status(200).json({message:'product updated'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}