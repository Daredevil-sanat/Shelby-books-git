import React,{useState} from 'react';

const Notepost = ()=>{
    const[user,setUser] = useState({Book:"", MRP:"", contactNo:"", address:""});
    const send = async(e)=>{
        e.preventDefault();
        const res = await fetch('/auth/notepost',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        })
        if(res.ok){
            window.alert("Notes added successfully");
            console.log("Notes added successfully");
        }else{
            window.alert("Something went wrong");
        }

    }
    return(
        <>
        <form method = "POST"> 
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Book you want to buy:</label>
  <input type="text" name = "Book" value ={user.Book} onChange={(e)=>{setUser({...user, [e.target.name]:e.target.value})}} className="form-control" id="exampleFormControlInput1"   />
</div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">What is your budget for this Book:</label>
  <input type="text" name = "MRP" value ={user.MRP} onChange={(e)=>{setUser({...user, [e.target.name]:e.target.value})}} className="form-control" id="exampleFormControlInput1" />
</div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Whatsapp number:</label>
  <input type="number" name = "contactNo" value ={user.contactNo} onChange={(e)=>{setUser({...user, [e.target.name]:e.target.value})}} className="form-control" id="exampleFormControlInput1"   />
</div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter your current address where we will deliver you the book:</label>
  <input type="text" name = "address" value ={user.address} onChange={(e)=>{setUser({...user, [e.target.name]:e.target.value})}} className="form-control" id="exampleFormControlInput1"   />
</div>

<button type="submit" onClick={send} className="btn btn-primary">Submit</button>
</form>
        </>
    )
}

export default Notepost