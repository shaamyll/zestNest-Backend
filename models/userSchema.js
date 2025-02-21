const mongoose = require('mongoose')

//1 schema creation
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
     password : {
        type:String,
        required:true
     },
    role: {
        type:String,
        default:'user'
    }
  })

const users = mongoose.model('users',userSchema)
module.exports = users