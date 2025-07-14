const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

//to be allowed to pass json data to node js it's for security concerns
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello')
})

// Reading all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Reading a specific product using its ID
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findBy(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Adding product
app.post('/api/products', async (req, res) => {
    try {
        //Saving data in an instance of Product wich is product
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Updating a specific product
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        //update the product that has the ID id with whatever is in req.body
        const product = await Product.findByAndUpdate(id, req.body)

        if(!product) {
            return res.status(404).json({message: "Product was not found!"})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// Setting connection string and port confuguration
const port = process.env.PORT || 3000

mongoose.connect("mongodb+srv://sirrdev:admin905SirrDev-_&3480@productsdb.r0qweb5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ProductsDB")
.then(() => {
    console.log('Connected to the database!')
    app.listen(port, () => console.log(`Listenin on port ${port}...`))
    
    app.get('/', (req, res) => {
        
    })
})
.catch(() => {
    console.log('Connection failed!')
})