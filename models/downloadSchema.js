const mongoose = require('mongoose')

//1 schema creation
const downloadSchema = new mongoose.Schema({
    id:{
        type:String
    },
    name: {
        type:String,
        required:true
    },
     cuisine : {
        type:String,
        required:true
    },
     image : {
        type:String,
        required:true
    },
    count : {
        type:Number,
        required:true
    },
    userId : {
        type:String
    }
  })

const downloads = mongoose.model('downloads',downloadSchema)
module.exports = downloads