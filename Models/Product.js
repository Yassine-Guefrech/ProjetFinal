const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : String,
    image : {type : String, required : true},
    price :{type:Number, required : true}
})

module.exports = mongoose.model('product',productSchema)