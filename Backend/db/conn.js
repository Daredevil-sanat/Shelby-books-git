const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://sam:curran@cluster0.sndtgel.mongodb.net/';

mongoose.connect(mongoUri).then(()=>{
    console.log("Connected to mongodb database successfully");
}).catch((err)=>{
    console.log(err);
});