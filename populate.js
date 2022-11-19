const Product = require("./models/products")
const connectDB = require("./config/database")

const jsonProduct = require("./products.json")

const start = async () => {
    try {
        await connectDB()
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log("Success!!!")
    } catch (err) {
        console.log(err)
    }
}

start()