import React,{useState} from 'react';

const Sellbook = ()=>{
    const[user,setUser]= useState({Book:"",MRP:"",condition:"",contactNo:"",address:""});
    const send = async(e)=>{
        e.preventDefault();
        const res = await fetch('/auth/sellbook',{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(user)
        })
         if(res.ok){
            window.alert("Details sent successfully");
            console.log("Details sent successfully");
         }else{
            window.alert("Unable to register the data as something went wrong");
            console.log("Unable to register the details as something went wrong");
         }
    }
return(
    <>
    <form method = "POST">
  <div   className="mb-3">
    <label for="exampleInputEmail1"   className="form-label">Book you want to sell:</label>
    <input type="text" name="Book" value={user.Book} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div   className="mb-3">
    <label for="exampleInputPassword1"   className="form-label">On what price you want to sell this book:</label>
    <input type="number" name="MRP" value={user.MRP} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div   className="mb-3">
    <label for="exampleInputPassword1"   className="form-label">Describe us about the condition of your book:</label>
    <input type="text" name="condition" value={user.condition} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div   className="mb-3">
    <label for="exampleInputPassword1"   className="form-label">Enter your Whatsapp number:</label>
    <input type="number" name="contactNo" value={user.contactNo} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}  className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div   className="mb-3">
    <label for="exampleInputPassword1"   className="form-label">Write the address from where we have to pick-up the book:</label>
    <input type="text" name="address" value={user.address} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}  className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" onClick={send}  className="btn btn-primary">Submit</button>
</form>
    </>
)
}

export default Sellbook