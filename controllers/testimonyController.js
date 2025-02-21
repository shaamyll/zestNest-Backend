
const testimonies = require('../models/testimonySchema')


exports.addTestimony=async(req,res)=>{
    console.log("Inside add Testimony function");
    
    const {name,email,message} = req.body

    try{

        const newTestimony = new testimonies({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }
    catch(err){
        res.status(406).json(err)
    }
    
}



exports.getAllTestimony=async(req,res)=>{
    try{
        const response = await testimonies.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
}




exports.updateTestimony=async(req,res)=>{

    console.log("Insdide update testimony function");
    const {id} = req.params
    const status = req.query.status
    
    try{
        const existingtestimony = await testimonies.findById({_id:id})
        if(existingtestimony){
            existingtestimony.status = status
            await existingtestimony.save()
            res.status(200).json(existingtestimony)
        }
        else{
            res.status(401).json(newTestimony)
            }
        }
    catch(err){
        res.status(400).json(err)
    }
}





