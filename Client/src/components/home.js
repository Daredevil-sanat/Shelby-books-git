import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Cardbg from './Images/bg.jpg';
import M1 from './Images/M1.jpg';
import M2 from './Images/M2.jpeg';
import Physics from './Images/Physics.jpg';
import Graphics from './Images/Graphics.jpg';
import Sapiens from './Images/Sapiens.jpg';
import AtomicHabits from './Images/Atomic_habits.jpg';
import PhysicsNcert from './Images/PhysicsNcert.jpg';
import Immortalsofmeluha from './Images/Immortals_of_meluha.jpg';
import powerofsubconciousmind from './Images/PowerOfSubConciousMind.jpg';
const Home = ()=>{
    const[count,setCount]=useState(0);
    return(
        <>
        <div className="homeContainer"> 
        <figure className="text-center">
  <blockquote className="blockquote">
  <h1>Welcome to our Bookstore</h1>    
  </blockquote>
  <figcaption className="blockquote-footer">
    <h5>
      
       Best place to buy and sell  second-hand books <cite title="Source Title">in reasonable prices</cite>
       </h5>
  </figcaption>
</figure>
         <div className="goat">

            <div className="card">    
  <img src={M1} className="card-img-top" alt="solly"/>
  <div className="card-body">
   <h5 className="card-title">Price:Rs 50</h5>
    <p className="card-title">Book : Shivani Engineering M1</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>

    <div className="card">    
  <img src={Immortalsofmeluha} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs 100</h5>
    <p className="card-title">Book : Immortals of Meluha by Amish Tripathi(Best Seller)</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>

    <div className="card">    
  <img src={M2} className="card-img-top" alt="solly"/>
  <div className="card-body">
     <h5 className="card-title">Price:Rs 50</h5>
    <p className="card-title">Book : Shivani Engineering M2</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>

    <div className="card">    
  <img src={Physics} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs 50</h5>
    <p className="card-title">Book : Shivani Engineering Physics(1st Year)</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>


    <div className="card">    
  <img src={Sapiens} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs 100</h5>
    <p className="card-title">Book : Sapiens by Yuval Noah Harari(Best seller)</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>


    <div className="card">    
  <img src={PhysicsNcert} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs 50</h5>
    <p className="card-title">Book : Shivani Engineering</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>

    <div className="card">    
  <img src={AtomicHabits} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs100</h5>
    <p className="card-title">Book : Atomic habits by James Clear(Best Seller)</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>

    <div className="card">    
  <img src={Graphics} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs 50</h5>
    <p className="card-title">Book : Shivani Engineering Graphics</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>

    <div className="card">    
  <img src={powerofsubconciousmind} className="card-img-top" alt="solly"/>
  <div className="card-body">
    <h5 className="card-title">Price:Rs 100</h5>
    <p className="card-title">Book : Power of subconcious mind by Joseph Murphy(Best Seller)</p>
    <Link to ="/register" className="btn btn-primary">Go somewhere</Link>
    </div>
    </div>
    


  </div>
</div>

        </>
    )
}

export default Home