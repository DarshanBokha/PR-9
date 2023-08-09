const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    categoryId : {
        type : String,
        require : true
    },
    subcategoryId : {
        type : String,
        require : true
    },
    pdcname : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    qty : {
        type : Number,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    },
})

const crud = mongoose.model('addtocartcrud',crudschema)

module.exports = crud