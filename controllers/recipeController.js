const recipes = require('../models/recipeSchema')



exports.getAllRecipes = async (req, res) => {
    console.log("Inside Recipe Controller");
    
    try {
        const response = await recipes.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}


exports.getARecipes= async(req,res)=>{
    console.log("Inside A Recipe Controller");
    const {id} = req.params
    
    try {
        const response = await recipes.findById({_id:id})
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}


exports.getRelatedRecipe= async(req,res)=>{
    console.log("Inside Related Recipe Controller");
    const cuisine = req.query.cuisine
    
    try {
        const response = await recipes.find({cuisine})
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}


exports.addnewRecipe = async(req,res)=>{
    
    const {name,cookTimeMinutes,prepTimeMinutes,servings,cuisine,difficulty,image,caloriesPerServing,ingredients,instructions,mealType} = req.body
    try{
        const existingRecipe = await recipes.findOne({name})

        if(existingRecipe){
            res.status(406).json("Recipe Already Existing")
        }
        else{
            const newRecipe = new recipes({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })

            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }
    catch(err){
        res.status(400).json(err)
    }
}

exports.updateRecipe = async(req,res)=>{
    
    const {id} = req.params

    const {name,cookTimeMinutes,prepTimeMinutes,servings,cuisine,difficulty,image,caloriesPerServing,ingredients,instructions,mealType} = req.body
    try{
        const existingRecipe = await recipes.findByIdAndUpdate({_id:id},{
            name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
        },{new:true})  //New True is used to reflect the response fastly

            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        
    }
    catch(err){
        res.status(400).json(err)
    }
}


exports.deleteRecipe = async(req,res)=>{
    
    const {id} = req.params

    try{
        const deleteRecipe = await recipes.findByIdAndDelete({_id:id})  //New True is used to reflect the response fastly

            res.status(200).json("Rcipe Deleted Succesfully")
        
    }
    catch(err){
        res.status(400).json(err)
    }
}


