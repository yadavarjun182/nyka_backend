const express = require("express")
const {ProductModel} = require("../models/product.model")

const productRouter = express.Router()

productRouter.post("/api/products", async (req, res) => {
    const payload = req.body
    try {
        const product = new ProductModel(payload)
        await product.save()
        res.send({ "msg": "product listed successfully" })
    }
    catch (err) {
        res.send({ "msg": err.message })
    }
})



productRouter.get("/api/products", (req, res) => {
  
    res.send({ "msg": "here are all products"})
})

module.exports={productRouter}
