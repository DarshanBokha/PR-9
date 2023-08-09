const mongoose = require('mongoose')

const crudSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    cpassword : {
        type : String,
        require : true
    },
})

const crud = mongoose.model('crud',crudSchema)

module.exports = crud