import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ()=>{
  const[user,setUser]= useState({email:"",password:""});
  const send = async(e)=>{
    e.preventDefault();
    const res = await fetch('/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    });
    if(res.ok){
      window.alert("User logged in successfully");
      console.log("User logged in successfully");
    }
    else if(res.status === 422 || res.status === 500 ){
      window.alert("Something went wrong");
      console.log("Something went wrong");
    }
    const data = await res.json();
    console.log(data);
  }
 return(
    <>
  
  

  <form method="POST"> 
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email"  name="email" value={user.email} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}  className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
  <input type="password" name="password" value={user.password} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}} className="form-control" id="exampleFormControlInput1" />
</div>
<Link to="/register">If not registered,click to register first...</Link>
<br /><br />
<button type="submit" onClick={send}  className="btn btn-primary">Submit</button>
</form>

      

    </>
 )
}
 export default Login