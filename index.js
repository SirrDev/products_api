const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = process.env.PORT || 3000

mongoose.connect("mongodb+srv://@productsdb.r0qweb5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ProductsDB")
.then(() => {
    console.log('Connected to the database!')
    app.listen(port, () => console.log(`Listenin on port ${port}...`))
    
    app.get('/', (req, res) => {
        
    })
})
.catch(() => {
    console.log('Connection failed!')
})