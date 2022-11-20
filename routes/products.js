const express = require("express")
const productsRouter = express.Router()

const getAllProducts = require("../controllers/products")

productsRouter.route("/").get(getAllProducts)

module.exports = productsRouter
