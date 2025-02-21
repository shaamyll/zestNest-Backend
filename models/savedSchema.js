const mongoose = require('mongoose')

//1 schema creation
const savedSchema = new mongoose.Schema({
    id:{
        type:String
    },
    name: {
        type:String,
        required:true
    },
     image : {
        type:String,
        required:true
    },
    userId : {
        type:String
    }
  })

const saves = mongoose.model('saves',savedSchema)
module.exports = saves