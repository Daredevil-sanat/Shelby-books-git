const express = require('express');
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
require('./db/conn');
app.use('/auth', require('./Router/user'));

app.get('/',(req,res)=>{
    res.send("Yo bro who got you smile like that...");
});
app.listen(PORT,()=>{
    console.log(`Listening the app at port number ${PORT}`);
})