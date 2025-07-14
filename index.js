const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.routes.js')
const app = express()

// Middlewares

//to be allowed to pass json data to node js it's for security concerns
app.use(express.json())
//to add data in a formUrl
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send('hello')
})


// Setting connection string and port confuguration
const port = process.env.PORT || 3000

mongoose.connect("mongodb+srv://sirrdev:admin905SirrDev-_&3480@productsdb.r0qweb5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ProductsDB")
.then(() => {
    console.log('Connected to the database!')
    app.listen(port, () => console.log(`Listening on port ${port}...`))
    
    app.get('/', (req, res) => {
        
    })
})
.catch(() => {
    console.log('Connection failed!')
})