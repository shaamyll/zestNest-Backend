const mongoose = require('mongoose')

//1 schema creation
const testimonySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
     message : {
        type:String,
        required:true
     },
     status : {
        type:String,
        default:"pending"
     }
  })

const testimonies = mongoose.model('testimonies',testimonySchema)
module.exports = testimonies