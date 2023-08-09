const categoryTbl = require('../models/categoryTbl')

const addcategory = async(req,res)=>{
    try {
        let addcat = await categoryTbl.create({
            category : req.body.category,
            status : req.body.status
        })
        if(addcat){
            return res.json({status : 1,message : "Category Add Successfully"})
        }
        else{
            return res.json({status : 0,message : "Category not Add"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const viewcategory = async(req,res)=>{
    try {
        let viewcat = await categoryTbl.find({})
        if(viewcat){
            return res.json({status : 1,message : viewcat})
        }
        else{
            return res.json({status : 0,message : "Data Not Found"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const deletecategory = async(req,res)=>{
    try {
        let deletecat = await categoryTbl.findByIdAndDelete(req.query.id)
        if(deletecat){
            return res.json({status : 1,message : "Category Delete Successful"})
        }
        else{
            return res.json({status : 0,message : "Category Not found"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const editcategory = async(req,res)=>{
    try {
        let editcat = await categoryTbl.findByIdAndUpdate(req.body.id,{
            category : req.body.category,
            status : req.body.status,
        })
        if(editcat){
            return res.json({status : 1,message : "Category Update Successfull"})
        }
        else{
            return res.json({status : 0,message : "Category Not Found"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

module.exports = {addcategory,viewcategory,deletecategory,editcategory}