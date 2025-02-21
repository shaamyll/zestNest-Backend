const { response } = require('express');
const downloads = require('../models/downloadSchema')

exports.addToDownloads = async(req,res)=>{
    console.log("Inside add to Dwonloads");

    const {id} = req.params
    const userId = req.payload
    const {name,cuisine,image} = req.body

try{
    existingRecipe = await downloads.findOne({id})

    if(existingRecipe){
        existingRecipe.count++
        await existingRecipe.save()
        res.status(200).json(existingRecipe)
    }
    else{
        const newdownload = new downloads({
           id,name,cuisine,image,count:1,userId
        })
        await newdownload.save()
        res.status(200).json(newdownload)
    }
}
catch(err){
    res.status(400).json(err)
}

    
}



exports.getAllDwonloads=async(req,res)=>{
    try{
        const response  = await downloads.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
}



