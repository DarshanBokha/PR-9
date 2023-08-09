const registertbl = require('../models/ragisterTbl')
const jwtData = require('jsonwebtoken')

const insertdata = async (req,res)=>{
    try {
        const {name,email,password,cpassword} = req.body
        if(password != cpassword){
            return res.json({status : 0,message : "Password and Confirm Password are not same"})
        }
        else{
            let checkemail = await registertbl.findOne({email : email})
            if(checkemail){
                return res.json({status:0,message : ('Email Already Exist')})
            }
            else{
                let addData = await registertbl.create({
                    name : name,
                    email : email,
                    password : password,
                    cpassword : cpassword
                })
                if(addData){
                    return res.json({status : 1,message : "Register Successfully"})
                }
                else{
                    return res.json({status : 0,message : "Register Not Successfully"})
                }
            }
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

const viewdata = async (req,res)=>{
    try {
       let viewdata = await registertbl.find({})
       if(viewdata){
            return res.json({status : 1,message : viewdata})
       } 
       else{
            return res.json({status : 0,message : "Record Not Found"})
       }
    } 
    catch (error) {
        console.log(error);
        return false
    }
}

const deletedata = async(req,res)=>{
    try {
        let deletedata = await registertbl.findByIdAndDelete(req.query.id)
        if(deletedata){
            return res.json({status : 1,message : "Delete Successfully"})
        }
        else{
            return res.json({status : 0,message : "Not Deleted"})
        }
    } 
    catch (error) {
        console.log(error);
        return false
    }
}

const editdata = async(req,res)=>{
    try {
        let editdata = await registertbl.findByIdAndUpdate(req.body.id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            cpassword : req.body.cpassword
        })
        if(editdata){
            return res.json({status : 1,message : "Edit Successfully"})
        }
        else{
            return res.json({status : 0,message : "Edit not Successful"})
        }
    } catch (err) {
        console.log(err);
        return false
    }
}

const login = async(req,res)=>{
    try {
        let logindata = await registertbl.findOne({email : req.body.email})
        if(!logindata || logindata.password != req.body.password){
            return res.json({status : 0,message : "Email Or Password maybe Wrong"})
        }
        let token = jwtData.sign({payload : logindata},'skg',{expiresIn : '1h'})
        return res.json({token : token})
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

module.exports = {insertdata,viewdata,deletedata,editdata,login}