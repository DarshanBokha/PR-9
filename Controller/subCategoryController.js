const subcategoryTbl = require('../models/subcategoryTbl')

const addsubcategory = async(req,res)=>{
    try {
        let addsubcat = await subcategoryTbl.create({
            categoryId : req.body.category,
            subcategory : req.body.subcategory,
            status : req.body.status
        })
        if(addsubcat){
            return res.json({status : 1,message : "SubCategory Add Successfully"})
        }
        else{
            return res.json({status : 0,message : "SubCategory not Add"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const viewsubcategory = async(req,res)=>{
    try {
        let viewsubcat = await subcategoryTbl.find({}).populate('categoryId')
        if(viewsubcat){
            return res.json({status : 1,message : viewsubcat})
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

const deletesubcategory = async(req,res)=>{
    try {
        let deletesubcat = await subcategoryTbl.findByIdAndDelete(req.query.id)
        if(deletesubcat){
            return res.json({status : 1,message : "SubCategory Delete Successful"})
        }
        else{
            return res.json({status : 0,message : "SubCategory Not found"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const editsubcategory = async(req,res)=>{
    try {
        let editcat = await subcategoryTbl.findByIdAndUpdate(req.body.id,{
            categoryId : req.body.category,
            subcategory : req.body.subcategory,
            status : req.body.status,
        })
        if(editcat){
            return res.json({status : 1,message : "subCategory Update Successfull"})
        }
        else{
            return res.json({status : 0,message : "SubCategory Not Found"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}


module.exports = {addsubcategory,viewsubcategory,deletesubcategory,editsubcategory}