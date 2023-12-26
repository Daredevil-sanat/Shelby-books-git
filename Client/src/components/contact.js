import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Contact = ()=>{
  const history = useNavigate();
  const[user,setUser]=useState({});
  const abcd = async()=>{
    try{
     const res= await fetch('/auth/contact',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     });
     if(res.ok){
      console.log("yo bro who got you smile like that ....");
     }else{
      const error = new Error(res.error);
      throw error;
     }
     const data = await res.json();
     console.log(data);
     setUser(data);
    }catch(e){
      console.log(e);
    }
  }
  
    useEffect(()=>{
      abcd();
    });
return(
    <> 
    <div className="contactContainer"> 
    <form method="GET">
   
  <div classname="mb-3">
    <label htmlFor="exampleInputEmail1" classname="form-label">Enter your Email:-</label><br />
    <input type="email" classname="form-control" value={user.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div classname="mb-3">
    <label htmlFor="exampleInputPassword1" classname="form-label">Enter your name:-</label><br />
    <input type="text" classname="form-control" value={user.name} id="exampleInputPassword1"/>
  </div>
  <br />
 <button type="submit" classname="btn btn-primary">Submit</button>
<br /><br /><br />
 <div classname="mb-3">
    <label htmlFor="exampleInputPassword1" classname="form-label">Contact us by calling or texting me on this number:-</label><br />
    <br /><input type="text" classname="form-control" value="8707888197" id="exampleInputPassword1"/>
  <br /><label htmlFor="exampleInputPassword1" classname="form-label">If you face issue at 2 AM at night you can call us freely</label><br />
  </div>

  <div classname="mb-3">
    <br/> <label htmlFor="exampleInputPassword1" classname="form-label">Email us your concern:-</label><br />
    <input type="text" classname="form-control" value="ambuj@tripathi" id="exampleInputPassword1"/><br />
    <label htmlFor="exampleInputPassword1" classname="form-label">Feel free to email us </label><br />
  </div>
</form>


    
</div>
    </>
)
}

export default Contact;