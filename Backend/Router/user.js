const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateAuthToken } = require("../token");
require("../db/conn");
const Vivek = require("../model/userSchema");
const Notes = require("../model/notes");
const Sell = require('../model/sell');
const { Authenticate } = require("../middleware/authenticate");

router.post("/", async (req, res) => {
  const { name, email, contactNo, password, cpassword } = req.body;

  if (!name || !email || !contactNo || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "Please fill in all the credentials" });
  }
  if (password != cpassword) {
    return res
      .status(422)
      .json({ error: "password and cpassword must be same " });
  }

  try {
    const userExist = await Vivek.findOne({ email: email });
    if (userExist) {
      return res
        .status(422)
        .json({ error: "User already exist move on to login page" });
    }

    const newUser = await new Vivek({
      name,
      email,
      contactNo,
      password,
      cpassword,
    });
    const userRegistered = newUser.save();
    if (userRegistered) {
      console.log("User registered succesfully");
      res
        .status(201)
        .json({ message: "User registered successfully", newUser });
    } else {
      console.log("Unable to register the user..");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please fill-in all the credentials" });
  }
  try {
    const userExist = await Vivek.findOne({ email: email });
    if (!userExist) {
      return res.status(422).json({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
    const token = await generateAuthToken(userExist);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 23456000),
      httpOnly: true,
    });
    if (isMatch) {
      console.log(userExist + token);
      res
        .status(201)
        .json({ message: "User signed in successfully", userExist });
    } else {
      return res.status(422).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/contact", Authenticate, (req, res) => {
  console.log("we are inside the contact page...");
  res.send(req.rootUser);
});

router.post("/notepost", Authenticate, async (req, res) => {
  const { Book,MRP,contactNo,address  } = req.body;
  if(!Book || !MRP || !contactNo || !address ){
    return res.status(422).json({error:"Kindly fill in all the details"});
  }
  console.log(req.rootUser);
  const userId = req.rootUser._id;
  console.log("User Id is: ", userId);
  const newNote = new Notes({ userId, Book , MRP, contactNo , address });
  const noteSave = await newNote.save();
  if (noteSave) {
    console.log("Notes saved successfully");
    return res
      .status(201)
      .json({ message: "Notes saved successfully", data: noteSave });
  } else {
    return res
      .status(422)
      .json({ error: "Unable to save the notes in database" });
  }
});

router.post("/sellbook", Authenticate , async(req,res)=>{
  const { Book , MRP , condition , contactNo , address } = req.body;
  const userId = req.rootUser._id;
  if(!Book || !MRP || !condition || !contactNo || !address ){
    return res.status(422).json({error:"Please fill in all the credentials"});
  }
  const brook = await new Sell({ userId, Book, MRP , condition , contactNo , address });
  const brookSave = await brook.save();
  if(brookSave){
    console.log("Sell book feild added succesfully");
    return res.status(201).json({message:"sell book details added successfully..."});
  }else{
    return res.status(422).json({error:"Unable to register the user"});
  }
})

// router.get("/notes/getAll", Authenticate, async (req, res) => {
//     const userId = req.rootUser._id;
//     const notes = await Notes.find({userId})
//     console.log(notes);
//     return res.status(200).json(notes);

// })
module.exports = router;
