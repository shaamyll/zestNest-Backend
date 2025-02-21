//backend creation

//1 Load .env file
require('dotenv').config()


//2 import express
const express = require('express')

//6 import cors
const cors = require('cors')

const db = require('./DB/connection')

const router = require('./Routes/router')


//3 Create an application using express
const rwserver = express()

//8 use cors
rwserver.use(cors())
rwserver.use(express.json())
rwserver.use(router)


//4 Define port
const PORT = 3000 || process.env.PORT


//5 Run the server
rwserver.listen(PORT,()=>{
    console.log("RWserver is running on the port" +PORT);
    
})


rwserver.get('/',(req,res)=>{
    console.log("Welcome to RW server");
    res.send("Welcome to RW server")
})

