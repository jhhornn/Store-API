const express = require("express")
const morgan = require("morgan")
const { urlencoded } = require("body-parser")
const {
  errorLogger,
  errorResponder,
  invalidPathHandler
} = require("./middlewares/errHandler")
const productsRouter = require("./routes/products")


const app = express()

app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(morgan("dev"))


app.get("/", (req, res) =>{
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})

app.use("/api/v1/products", productsRouter)

app.all("*", (req, res, next) => {
  next()
})

app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

module.exports = app
