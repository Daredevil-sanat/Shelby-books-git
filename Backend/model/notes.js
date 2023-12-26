const mongoose = require('mongoose');
const { Schema } = mongoose ;

const noteSchema = new mongoose.Schema({
    userId:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"user"
    },
     Book:{
        type:String,
        required:true
     },
    MRP:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const notes = mongoose.model('buybook', noteSchema);
module.exports = notes