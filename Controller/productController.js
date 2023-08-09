const productTbl = require('../models/productTbl')

const fs = require('fs')

const addproduct = async (req, res) => {
    try {
        const { category, subcategory, pdcname, price, qty, discription } = req.body
        let image = ""
        if (req.file) {
            image = req.file.path
        }
        let product = await productTbl.create({
            categoryId: category,
            subcategoryId: subcategory,
            pdcname: pdcname,
            price: price,
            qty: qty,
            discription: discription,
            image: image
        })
        if (product) {
            return res.json({ status: 1, message: "Product Successfully Add" })
        }
        else {
            return res.json({ status: 0, message: "Product not Add" })
        }
    }
    catch (err) {
        console.log(err);
        return false
    }
}

const viewproduct = async (req, res) => {
    try {
        const viewproduct = await productTbl.find({}).populate('categoryId').populate('subcategoryId')
        if (viewproduct) {
            return res.json({ status: 1, message: viewproduct });
        }
        else {
            return res.json({ status: 0, message: "Record Not Found" });
        }
    }
    catch (err) {
        console.log(err);
        return false
    }
}

const deleteproduct = async (req, res) => {
    try {
        const deleteproduct = await productTbl.findByIdAndDelete(req.query.id);
        if (deleteproduct) {
            return res.json({ status: 1, message: "Product Delete Successfully" });
        }
        else {
            return res.json({ status: 0, message: "Record Not Found" });
        }
    }
    catch (err) {
        console.log(err);
        return false
    }
}

const editproduct = async (req, res) => {
    try {
        if(req.file){
            const dltimg = await productTbl.findById(req.body.id)
            if(dltimg){
                fs.unlinkSync(dltimg.image)
            }
            else{
                console.log("image not unlink");
                return false
            }
            let image = "";
            if(req.file){
                image = req.file.path
            }
            const editproduct = await productTbl.findByIdAndUpdate(req.body.id, {
                categoryId: req.body.category,
                subcategoryId: req.body.subcategory,
                pdcname: req.body.pdcname,
                price: req.body.price,
                qty: req.body.qty,
                discription: req.body.discription,
                image: image
            })
            if (editproduct) {
                return res.json({ status: 1, message: "Product Update Successfully" });
            }
            else {
                return res.json({ status: 0, message: "Record Not Found" });
            }
        }
        else{
            let image = ""
            let product = await productTbl.findById(req.body.id)
            if(product){
                image = product.image;
                const editproduct = await productTbl.findByIdAndUpdate(req.body.id, {
                    categoryId: req.body.category,
                    subcategoryId: req.body.subcategory,
                    pdcname: req.body.pdcname,
                    price: req.body.price,
                    qty: req.body.qty,
                    discription: req.body.discription,
                    image: image
                }) 
                if (editproduct) {
                    return res.json({ status: 1, message: "Product Update Successfully" });
                }
                else {
                    return res.json({ status: 0, message: "Record Not Found" });
                }
            }
        }
    }
    catch (err) {
        console.log(err);
        return false
    }
}

module.exports = { addproduct, viewproduct, deleteproduct, editproduct }