const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    category : {
        type : String,
        require : true
    },
    status :{
        type : String,
        require : true
    }
})

const crud = mongoose.model('catcrud',crudschema)

module.exports = crud