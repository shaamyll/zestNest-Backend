const users = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerAPI=async(req,res)=>{
    console.log("Inside register API");
    const {name,email,password} = req.body

    const existingUser = await users.findOne({email})

    if(existingUser){
        res.status(401).json("User Already exisitng")
    }
    else{

            const encryptedPassword = await bcrypt.hash(password,10)

            console.log(encryptedPassword);
            
    
            const newUser = new users({name,email,password:encryptedPassword})
    
            await newUser.save()
            res.status(200).json(newUser)
       
        }
}


exports.loginAPI=async(req,res)=>{
    console.log("Inside Login API");

    const {email,password} = req.body

    const existingUser = await users.findOne({email})

  try{
    if(existingUser.role == "admin"){
        res.status(200).json(existingUser)
    }
    else if(existingUser){
        const actualpassword = await bcrypt.compare(password,existingUser.password)

        if(actualpassword){
            //Token Generation
            const token = jwt.sign({userId:existingUser._id},process.env.jwtKey)
            console.log(token);
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(401).json("Incorrect  password")
        }
     
    }
    else{
        res.status(401).json("Invalid User")
    }
  }
  catch(err){
    res.status(400).json(err)
  }
    
}



//Get all user in admin
exports.getAllUsersInAdmin=async(req,res)=>{
    try{
        const response = await users.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
}