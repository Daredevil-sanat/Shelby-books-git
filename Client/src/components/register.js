import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Register = ()=>{
  const [user,setUser]= useState({name:"",email:"",contactNo:"",password:"",cpassword:""})
  const send= async(e)=>{
    e.preventDefault();
    const res = await fetch('/auth/', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    });
    if(res.ok){
      window.alert("User registered successfully...");
      console.log("User registered successfully...");
    }
    else if(res.status === 422 || res.status ===500){
      window.alert("somekind of error occured here");
      console.log("some error occured here");
    }
    const data = await res.json();
    console.log(data);
  }
    return(
        <>


    

        <form method="POST">
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name="name" value={user.name} onChange={(e)=>{setUser({...user, [e.target.name]: e.target.value})} } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" name="email" value={user.email} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">contactNo</label>
    <input type="number" name="contactNo" value={user.contatctNo} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={user.password} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
    <input type="password" name="cpassword" value={user.cpassword} onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <Link to="/login">If already registered,click this to login... </Link>
  <br /><br />
  <button type="submit" onClick={send} className="btn btn-primary">Submit</button>
</form>

 





        


        </>
    )
}

export default Register