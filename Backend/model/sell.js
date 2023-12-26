const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    Book:{
        type:String,
        required:true
    },
    MRP:{
        type:Number,
        required:true
    },
    condition:{
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
});

const sell = mongoose.model('sellbook',sellSchema);
module.exports = sell