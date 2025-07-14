const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter product name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    image: {
        type: String,
        required: false
    },
    

},
    {
        timestamps: true
    }
)

// Allowing mongobd to use the schema above ps the model here is Product
const Product = mongoose.model("Product", ProductSchema)

//exporting the model in order to use it in other modules to save datas
module.exports = Product