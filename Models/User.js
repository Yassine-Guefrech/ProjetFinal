const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : {type : String, required : true, unique : true},
    password :{type:String, required : true},
    role : String,
    pic : String
})

module.exports = mongoose.model('sana',userSchema)