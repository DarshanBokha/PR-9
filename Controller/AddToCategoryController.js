const productTbl = require('../models/productTbl')

const addtocartTbl = require('../models/addtocartTbl')

const addtocart = async(req,res)=>{
    try {
        const id = req.body.id
        let singleproduct = await productTbl.findById(id)
        let addtocart = await addtocartTbl.create({
            categoryId: singleproduct.category,
            subcategoryId: singleproduct.subcategory,
            pdcname: singleproduct.pdcname,
            price: singleproduct.price,
            qty: singleproduct.qty,
            discription: singleproduct.discription,
            image: singleproduct.image
        })
        if(addtocart){
            return res.json({status : 1,message : "Product Add in Cart"})
        }
        else{
            return res.json({status : 0,message : "Product Not Add in Cart"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const viewcart = async (req,res)=>{
    try {
        let viewcart = await addtocartTbl.find({})
        if(viewcart){
            return res.json({status : 1,message : viewcart})
        }
        else{
            return res.json({status : 0,message : "Record Not Found"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const deletecart = async(req,res)=>{
    try {
        let id = req.query.id
        let deletecart = await addtocartTbl.findByIdAndDelete(id)
        if(deletecart){
            return res.json({status : 1,message : "Product Remove From Cart"})
        }
        else{
            return res.json({status : 0,message : "Product not Remove From Cart"})
        }
    } 
    catch (error) {
        console.log(err);
        return false
    }
}

const editcart = async(req,res)=>{
    try {
        const {id,qty} = req.body;
        let editcart = await addtocartTbl.findByIdAndUpdate(id,{
            qty : qty
        })
        if(editcart){
            return res.json({status : 1,message : "Cart Updated"})
        }
        else{
            return res.json({status : 0,message : "Cart Not Update"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

module.exports= {addtocart,viewcart,deletecart,editcart}