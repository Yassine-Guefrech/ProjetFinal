const express = require('express')
const Product = require('../Models/Product')

const productRouter = express.Router()

productRouter.post('/postProduct',async(req,res)=>{
    try {
        const newproduct = new Product(req.body)
        await  newproduct.save()
        res.status(200).send({Msg : "Product",newproduct})
    } catch (error) {
        res.status(500).send('Could not add product')
    }
})
productRouter.get('/getAllProducts',async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).send({Msg : "List of products",products})
    } catch (error) {
        res.status(500).send('Could not get products')
    }
})

productRouter.get('/getOneproduct/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const oneProduct = await Product.findById(id)
        res.status(200).send({Msg:'The product is',oneProduct})
    } catch (error) {
        res.status(500).send('Could not get this product')
    }
})

productRouter.put('/updateProduct/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Product.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Product updated'})
    } catch (error) {
        res.status(500).send('Could not update product')
    }
})

productRouter.delete('/deleteProduct/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).send({Msg : 'product deleted'})
    } catch (error) {
        res.status(500).send('Could not delete this product')
    }
})

module.exports = productRouter
