const express = require('express')

const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const downloadController = require('../controllers/downloadController')
const savedController = require('../controllers/savedController')

const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router =  new express.Router()

router.get('/allrecipes',recipeController.getAllRecipes)

router.post('/addTestimony',testimonyController.addTestimony)

router.post('/register',userController.registerAPI)

router.post('/login',userController.loginAPI)

//Get A recipe
router.get('/getARecipe/:id',jwtMiddleware,recipeController.getARecipes)

//Get Related Recipes
router.get('/getrelatedRecipe',jwtMiddleware,recipeController.getRelatedRecipe)

//Add To Downloads
router.post('/addToDownloads/:id',jwtMiddleware,downloadController.addToDownloads)

//Add To save
router.post('/addToSave/:id',jwtMiddleware,savedController.addToSave)

//Get Saved Recipes
router.get('/getSavedRecipes',jwtMiddleware,savedController.getSavedrecipes)

//Get all downloads in admin page
router.get('/getAllDwonloads',downloadController.getAllDwonloads)

//Get all users in admin page
router.get('/getAllUsers',userController.getAllUsersInAdmin)

//Get all testimonies in admin page
router.get('/getAllTestimony',testimonyController.getAllTestimony)

//Update testimony in admin page
router.get('/updateTestimony/:id',testimonyController.updateTestimony)

//Add newRecipe in admin page
router.post('/addRecipe',recipeController.addnewRecipe)

//Update Recipe in admin page
router.put('/updateRecipe/:id',recipeController.updateRecipe)

//Update Recipe in admin page
router.delete('/deleteRecipe/:id',recipeController.deleteRecipe)



module.exports = router