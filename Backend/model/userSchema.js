const mongoose = require('mongoose');
const { Schema }= mongoose;
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
});

userSchema.pre('save', async function(next){
   if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.cpassword,12);
   }
   next();
})

const User = mongoose.model('user',userSchema);
module.exports = User;