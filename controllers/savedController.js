const saves = require('../models/savedSchema')

exports.addToSave=async(req,res)=>{
    console.log("Inside SavedRecipe ");

    const {id} = req.params
    const userId = req.payload
    const {name,image} = req.body

    try{
        existingRecipe = await saves.findOne({id})

        if(existingRecipe){
            res.status(401).json("Already in collection")
        }
        else{
            const newRecipe = new saves({
                id,name,image,userId
            })
            await newRecipe.save()  
            res.status(200).json(newRecipe)
        }
    }
    catch(err){
        res.status(400).json(err)
    }
    
}



exports.getSavedrecipes = async(req,res)=>{
    console.log("Inside Saved Recipes");
    
    const userId = req.payload
    try{
        const savedrecipes = await saves.find({userId})
        res.status(200).json(savedrecipes)
    }
    catch(err){
        res.status(400).json(err)
    }
}