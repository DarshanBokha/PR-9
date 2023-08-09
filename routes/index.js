const express = require('express')
 
const passport = require('passport')

const routes = express.Router()

const registerController = require('../Controller/registerLoginController')
const categoryController = require('../Controller/categoryController')
const SubcategoryController = require('../Controller/subCategoryController')
const ProductController = require('../Controller/productController')
const atcController = require('../Controller/AddToCategoryController')
const fileupload = require('../config/fileupload')

// Register And login
routes.post('/insertdata',registerController.insertdata)
routes.get('/viewRegisterdata',passport.authenticate('jwt', { session: false }),registerController.viewdata)
routes.delete('/deleteRegisterdata',registerController.deletedata)
routes.put('/editRegisterdata',registerController.editdata)
routes.post('/login',registerController.login)

//Category
routes.post('/addcategory',categoryController.addcategory)
routes.get('/viewcategory',passport.authenticate('jwt', { session: false }),categoryController.viewcategory)
routes.delete('/deletecategory',categoryController.deletecategory)
routes.put('/editcategory',categoryController.editcategory)

//SubCategory
routes.post('/addsubcategory',SubcategoryController.addsubcategory)
routes.get('/viewsubcategory',passport.authenticate('jwt', { session: false }),SubcategoryController.viewsubcategory)
routes.delete('/deletesubcategory',SubcategoryController.deletesubcategory)
routes.put('/editsubcategory',SubcategoryController.editsubcategory)

//Product
routes.post('/addproduct',fileupload,ProductController.addproduct)
routes.get('/viewproduct',ProductController.viewproduct)
routes.delete('/deleteproduct',ProductController.deleteproduct)
routes.put('/editproduct',fileupload,ProductController.editproduct)

//Add to Cart
routes.post('/addtocart',atcController.addtocart)
routes.get('/viewcart',atcController.viewcart)
routes.delete('/deletecart',atcController.deletecart)
routes.put('/editcart',atcController.editcart)

module.exports = routes

